NAME            := iml-online-help
PACKAGE_VERSION := 2.5.1
PACKAGE_RELEASE := 1

ifeq ($(UNPUBLISHED),true)
  SCM_COMMIT_NUMBER	:= $(shell git rev-list HEAD | wc -l)
  PACKAGE_RELEASE := $(SCM_COMMIT_NUMBER).$(PACKAGE_RELEASE)
endif

MD_FILES    := $(shell find docs -name \*.md)
OTHER_FILES := $(shell find docs -name \*.png -name \*.css)
HTML_FILES  := $(addprefix targetdir/,$(patsubst %.md,%.html,$(MD_FILES))) \
	       targetdir/index.html
SOURCES     := $(MD_FILES) $(OTHER_FILES)
DISTCLEAN   += vendor

# see https://stackoverflow.com/questions/2973445/ for why we subst
# the ".html" for "%html" to effectively turn this into a multiple
# matching target pattern rule
$(subst .html,%html,$(HTML_FILES)): vendor/cache $(SOURCES)
	bundle exec jekyll build --destination targetdir --baseurl '/help' \
	    --incremental
	find targetdir -name \*.md -print0 | xargs -0 rm -f

vendor/cache: Gemfile Gemfile.lock
	bundle install --path vendor/cache
	touch $@

install_build_deps:
	yum -y install epel-release
	yum -y install npm rubygem-bundler ruby-devel gcc autoconf \
		       automake libtool yum-plugin-copr zlib-devel
	#yum -y copr enable managerforlustre/CentOS_Ruby22
	curl https://copr.fedorainfracloud.org/coprs/managerforlustre/CentOS_Ruby22/repo/epel-7/managerforlustre-CentOS_Ruby22-epel-7.repo -o /etc/yum.repos.d/ruby.repo
	yum -y install ruby

NPM_PREREQS := $(HTML_FILES) README.md
include ./include/npm.mk

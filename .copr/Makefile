srpm:
BUILDROOT:=$(shell [ -d "${BUILDROOT}" ] && echo "${BUILDROOT}" || echo ".")
TMPDIR:=$(shell mktemp -d)

srpm:	
	rm -rf ${TMPDIR}/_topdir
	rm -rf ${TMPDIR}/scratch
	mkdir -p ${TMPDIR}/_topdir/SOURCES
	mkdir -p ${TMPDIR}/scratch
	if test -d ${BUILDROOT}/vendor; then cp -r ${BUILDROOT}/vendor ${TMPDIR}/scratch; fi
	cp -r ${BUILDROOT}/docs ${BUILDROOT}/.github ${BUILDROOT}/_includes ${BUILDROOT}/_config.yml ${BUILDROOT}/Dockerfile ${BUILDROOT}/Gemfile ${BUILDROOT}/Gemfile.lock ${BUILDROOT}/iml-online-help.spec ${BUILDROOT}/LICENSE ${BUILDROOT}/package-lock.json ${BUILDROOT}/package.json ${BUILDROOT}/README.md ${TMPDIR}/scratch
	yum -y install git
	yum-builddep -y ${TMPDIR}/scratch/iml-online-help.spec
	yum install -y which
	yum install -y npm
	curl -sSL https://rvm.io/mpapis.asc | gpg --import -
	curl -sSL https://rvm.io/pkuczynski.asc | gpg --import -
	\curl -sSL https://get.rvm.io | bash -s stable
	bash -c 'source /etc/profile.d/rvm.sh && \
	rvm install 2.6.5 && \
	gem install bundler && \
	cd ${TMPDIR}/scratch && \
	bundle install && \
	npm i && \
	npm run postversion && \
	npm pack'
	cp ${TMPDIR}/scratch/iml-online-help*.tgz ${TMPDIR}/_topdir/SOURCES
	rpmbuild -bs --define "_topdir ${TMPDIR}/_topdir" ${TMPDIR}/scratch/iml-online-help.spec
	cp -r ${TMPDIR}/_topdir/SRPMS/* $(outdir)
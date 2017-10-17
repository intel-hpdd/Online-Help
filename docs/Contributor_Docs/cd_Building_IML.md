# <a name="Top"></a>Building IML

[**Software Contributor Documentation Table of Contents**](cd_TOC.md)

## Prerequisites

Install the YUM Copr plugin:
```
# yum -y install yum-plugin-copr
```
Install the manager-for-lustre and DNF YUM repositories:
```
# yum copr enable managerforlustre/manager-for-lustre
# yum copr enable ngompa/dnf-el7
```
Install needed software packages:
```
# yum -y install python-virtualenv systemd-devel postgresql-devel graphviz-devel createrepo epel-release npm python-sphinx python-django gcc
```

## How does one build IML?
```
$ make
```

---
[Top of page](#Top)
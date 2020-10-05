From fedora:latest

MAINTAINER Twinkle Pardeshi "twinkle.pardeshi@gmail.com"

Run yum -y update && \
    yum -y install git npm && \
    git clone https://github.com/tpardeshi/imagematch.git -b code_refactoring

WORKDIR imagematch

EXPOSE 8080
RUN npm i


ENTRYPOINT ["npm"]
CMD ["start"]
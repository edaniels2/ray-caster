FROM public.ecr.aws/docker/library/node:16

ENV PATH=$PATH:/usr/src/app/node_modules/.bin \
    NODE_ENV=development

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

COPY . /usr/src/app

CMD ["tail", "-f", "/dev/null"]
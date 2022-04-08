FROM node:16.14-alpine As builder

WORKDIR /usr/src/app

COPY ./fe-app/package.json ./fe-app/package-lock.json ./

RUN npm install

COPY ./fe-app/ ./

RUN ./node_modules/@angular/cli/bin/ng.js build --prod

FROM nginx:1.21.6-alpine

WORKDIR /usr/share/nginx/html

COPY ./Dockerfiles/builds/fe-app/virtualhost.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /usr/src/app/dist/fe-app/ /usr/share/nginx/html

FROM node:10.13.0-alpine
FROM keymetrics/pm2:latest
MAINTAINER {{author}}
ADD . /{{name}}/
WORKDIR /{{name}}
ENV HOST 0.0.0.0
ENV PORT 3000
EXPOSE 3000
CMD ["pm2-runtime", "pm2.json"]

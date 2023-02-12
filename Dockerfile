FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80

# nginx를 백그라운드에서 돌아가도록 실행합니다.
CMD ["nginx", "-g", "daemon off;"]


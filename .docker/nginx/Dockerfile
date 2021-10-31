FROM nginx:alpine

LABEL author="Mohammed Amrabt" 

# Copy custom nginx config
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 81 443

ENTRYPOINT ["nginx", "-g", "daemon off;"]
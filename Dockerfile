#FROM nginx:1.15
# Build a small nginx image with static website
FROM nginx:alpine
COPY config/nginx/nginx.conf /etc/nginx/nginx.conf
COPY dist/ /usr/share/nginx/html

COPY config/proxy/dev.js /dev.js

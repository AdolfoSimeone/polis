FROM nginx:1.21.1-alpine

COPY nginx/nginx-ssl.site.default.conf /etc/nginx/conf.d/default.conf

# We only use these in testing.
COPY nginx/certs/cert.pem /etc/nginx/certs/cert.pem
COPY nginx/certs/privkey.pem  /etc/nginx/certs/privkey.pem
COPY html/error.html /var/www/default/error.html

EXPOSE 80
EXPOSE 443

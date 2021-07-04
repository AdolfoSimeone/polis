FROM nginx:1.19.10-alpine

COPY nginx/nginx-ssl.site.default.conf /etc/nginx/conf.d/default.conf

# We only use these in testing.
COPY nginx/certs/cert.pem /etc/nginx/certs/cert.pem
COPY nginx/certs/privkey.pem  /etc/nginx/certs/privkey.pem

EXPOSE 80
EXPOSE 443

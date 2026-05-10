FROM python:3.12-alpine

WORKDIR /app

COPY index.html styles.css script.js ./
COPY assets ./assets

ENV PORT=8080

EXPOSE 8080

CMD ["sh", "-c", "python -m http.server ${PORT:-8080} --bind 0.0.0.0"]

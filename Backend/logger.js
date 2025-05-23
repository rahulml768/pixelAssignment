
import winston from "winston";

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),         // adds timestamp field
    winston.format.json()               // outputs as JSON
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'app.json.log' })
  ]
});



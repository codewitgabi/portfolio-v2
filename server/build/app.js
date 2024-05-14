"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const nodemailer_1 = __importDefault(require("nodemailer"));
const express_validator_1 = require("express-validator");
const helmet_1 = __importDefault(require("helmet"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
// middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: ["https://codewitgabi.vercel.app", "http://localhost:5173"],
    credentials: true,
    optionsSuccessStatus: 200,
}));
app.set("port", process.env.PORT || 3000);
const transporter = nodemailer_1.default.createTransport({
    host: "smtp.gmail.com",
    port: Number(process.env.EMAIL_PORT),
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});
// send email enpoint
app.post("/email", (0, express_validator_1.body)("email")
    .notEmpty()
    .withMessage("email field is required")
    .escape()
    .isEmail()
    .withMessage("Please enter a valid email address"), (0, express_validator_1.body)("sender").notEmpty().withMessage("sender field is required").escape(), (0, express_validator_1.body)("message").notEmpty().withMessage("message field is required").escape(), async (req, res) => {
    const result = (0, express_validator_1.validationResult)(req);
    if (!result.isEmpty()) {
        return res.status(400).json(result.mapped());
    }
    const { email, sender, message } = (0, express_validator_1.matchedData)(req);
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `Portfolio - ${sender}`,
        text: `From: ${email} ${sender}\n${message}`,
        html: `
        <h3>From ${email} ${sender}</h3>
        <p>${message}</p>
      `,
    });
    return res.status(200).json({
        message: "Email sent successfully",
        statusCode: 200,
    });
});
app.listen(app.get("port"), () => {
    console.log(`Server listening on port ${app.get("port")}`);
});

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Configuration, OpenAIApi, OpenAIApiFactory } from "openai";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const configuration = new Configuration({
    organization: "org-Q18HVkjl2XSVugcB9JXQ0vNZ",
    apiKey: process.env.OPENAI_API_KEY,
    // apiKey: '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',
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();

/*openai.ChatCompletion.create(
  model="gpt-3.5-turbo",
  messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Who won the world series in 2020?"},
        {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
        {"role": "user", "content": "Where was it played?"}
    ]
)*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import HtmlRenderer from './HtmlRenderer'; // Import the HtmlRenderer component

const Report = () => {
  // Example HTML content (can be dynamic)
const htmlContent = `

<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Microsoft Word - FORMAT_FOR_SEMINAR_REPORT.doc</title>
    <meta name="author" content="administrator" />
    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
            text-indent: 0;
        }

        h1 {
            color: black;
            font-family: "Times New Roman", serif;
            font-style: normal;
            font-weight: bold;
            text-decoration: none;
            font-size: 22pt;
        }

        .h3,
        h3 {
            color: black;
            font-family: "Times New Roman", serif;
            font-style: normal;
            font-weight: bold;
            text-decoration: none;
            font-size: 14pt;
        }

        .s1 {
            color: black;
            font-family: "Times New Roman", serif;
            font-style: italic;
            font-weight: bold;
            text-decoration: none;
            font-size: 14pt;
        }

        h2 {
            color: black;
            font-family: "Times New Roman", serif;
            font-style: normal;
            font-weight: bold;
            text-decoration: none;
            font-size: 16pt;
        }

        .s2 {
            color: black;
            font-family: "Times New Roman", serif;
            font-style: normal;
            font-weight: bold;
            text-decoration: none;
            font-size: 14pt;
        }

        .s3 {
            color: black;
            font-family: "Times New Roman", serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 12pt;
        }

        .h4,
        h4 {
            color: black;
            font-family: "Times New Roman", serif;
            font-style: normal;
            font-weight: bold;
            text-decoration: none;
            font-size: 12pt;
        }

        .s4 {
            color: black;
            font-family: "Times New Roman", serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 12pt;
        }

        .s5 {
            color: black;
            font-family: "Times New Roman", serif;
            font-style: normal;
            font-weight: bold;
            text-decoration: none;
            font-size: 14pt;
        }

        .s6 {
            color: black;
            font-family: "Times New Roman", serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 14pt;
        }

        .s7 {
            color: black;
            font-family: "Times New Roman", serif;
            font-style: normal;
            font-weight: bold;
            text-decoration: none;
            font-size: 13pt;
        }

        .s8 {
            color: black;
            font-family: "Times New Roman", serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 13pt;
        }

        .s9 {
            color: black;
            font-family: "Times New Roman", serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 14pt;
        }

        p {
            color: black;
            font-family: "Times New Roman", serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 16pt;
            margin: 0pt;
        }

        .s10 {
            color: black;
            font-family: "Times New Roman", serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 14pt;
        }

        .s11 {
            color: black;
            font-family: "Times New Roman", serif;
            font-style: normal;
            font-weight: bold;
            text-decoration: underline;
            font-size: 16pt;
        }

        .s13 {
            color: #365F91;
            font-family: Cambria, serif;
            font-style: italic;
            font-weight: normal;
            text-decoration: none;
            font-size: 11pt;
        }

        .s14 {
            color: black;
            font-family: "Times New Roman", serif;
            font-style: normal;
            font-weight: bold;
            text-decoration: none;
            font-size: 11pt;
        }

        .s15 {
            color: black;
            font-family: "Times New Roman", serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 11pt;
        }

        .s16 {
            color: black;
            font-family: "Courier New", monospace;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        li {
            display: block;
        }

        #l1 {
            padding-left: 0pt;
            counter-reset: c1 1;
        }

        #l1>li>*:first-child:before {
            counter-increment: c1;
            content: counter(c1, decimal)" ";
            color: black;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
        }

        #l1>li:first-child>*:first-child:before {
            counter-increment: c1 0;
        }

        #l2 {
            padding-left: 0pt;
            counter-reset: c2 1;
        }

        #l2>li>*:first-child:before {
            counter-increment: c2;
            content: counter(c1, decimal)"." counter(c2, decimal)" ";
            color: black;
            font-family: "Times New Roman", serif;
            font-style: normal;
            font-weight: bold;
            text-decoration: none;
            font-size: 14pt;
        }

        #l2>li:first-child>*:first-child:before {
            counter-increment: c2 0;
        }

        li {
            display: block;
        }

        #l3 {
            padding-left: 0pt;
        }

        #l3>li>*:first-child:before {
            content: "- ";
            color: black;
            font-family: "Times New Roman", serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 16pt;
        }

        li {
            display: block;
        }

        #l4 {
            padding-left: 0pt;
            counter-reset: e1 1;
        }

        #l4>li>*:first-child:before {
            counter-increment: e1;
            content: counter(e1, decimal)". ";
            color: black;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
        }

        #l4>li:first-child>*:first-child:before {
            counter-increment: e1 0;
        }

        #l5 {
            padding-left: 0pt;
            counter-reset: e2 1;
        }

        #l5>li>*:first-child:before {
            counter-increment: e2;
            content: counter(e1, decimal)"." counter(e2, decimal)". ";
            color: #365F91;
            font-family: Cambria, serif;
            font-style: italic;
            font-weight: normal;
            text-decoration: none;
            font-size: 11pt;
        }

        #l5>li:first-child>*:first-child:before {
            counter-increment: e2 0;
        }

        #l6 {
            padding-left: 0pt;
        }

        #l6>li>*:first-child:before {
            content: " ";
            color: black;
            font-family: Symbol, serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        #l7 {
            padding-left: 0pt;
        }

        #l7>li>*:first-child:before {
            content: " ";
            color: black;
            font-family: Symbol, serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        #l8 {
            padding-left: 0pt;
        }

        #l8>li>*:first-child:before {
            content: " ";
            color: black;
            font-family: Symbol, serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        #l9 {
            padding-left: 0pt;
        }

        #l9>li>*:first-child:before {
            content: " ";
            color: black;
            font-family: Symbol, serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        #l10 {
            padding-left: 0pt;
        }

        #l10>li>*:first-child:before {
            content: " ";
            color: black;
            font-family: Symbol, serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        #l11 {
            padding-left: 0pt;
        }

        #l11>li>*:first-child:before {
            content: " ";
            color: black;
            font-family: Symbol, serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        #l12 {
            padding-left: 0pt;
        }

        #l12>li>*:first-child:before {
            content: " ";
            color: black;
            font-family: Symbol, serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        #l13 {
            padding-left: 0pt;
        }

        #l13>li>*:first-child:before {
            content: " ";
            color: black;
            font-family: Symbol, serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        #l14 {
            padding-left: 0pt;
            counter-reset: e2 1;
        }

        #l14>li>*:first-child:before {
            counter-increment: e2;
            content: counter(e1, decimal)"." counter(e2, decimal)". ";
            color: #365F91;
            font-family: Cambria, serif;
            font-style: italic;
            font-weight: normal;
            text-decoration: none;
            font-size: 11pt;
        }

        #l14>li:first-child>*:first-child:before {
            counter-increment: e2 0;
        }

        #l15 {
            padding-left: 0pt;
        }

        #l15>li>*:first-child:before {
            content: " ";
            color: black;
            font-family: Symbol, serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        #l16 {
            padding-left: 0pt;
        }

        #l16>li>*:first-child:before {
            content: " ";
            color: black;
            font-family: Symbol, serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        #l17 {
            padding-left: 0pt;
        }

        #l17>li>*:first-child:before {
            content: " ";
            color: black;
            font-family: Symbol, serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        #l18 {
            padding-left: 0pt;
        }

        #l18>li>*:first-child:before {
            content: " ";
            color: black;
            font-family: Symbol, serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        #l19 {
            padding-left: 0pt;
        }

        #l19>li>*:first-child:before {
            content: " ";
            color: black;
            font-family: Symbol, serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        #l20 {
            padding-left: 0pt;
        }

        #l20>li>*:first-child:before {
            content: " ";
            color: black;
            font-family: Symbol, serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        #l21 {
            padding-left: 0pt;
        }

        #l21>li>*:first-child:before {
            content: " ";
            color: black;
            font-family: Symbol, serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        #l22 {
            padding-left: 0pt;
            counter-reset: e2 1;
        }

        #l22>li>*:first-child:before {
            counter-increment: e2;
            content: counter(e1, decimal)"." counter(e2, decimal)". ";
            color: #365F91;
            font-family: Cambria, serif;
            font-style: italic;
            font-weight: normal;
            text-decoration: none;
            font-size: 11pt;
        }

        #l22>li:first-child>*:first-child:before {
            counter-increment: e2 0;
        }

        #l23 {
            padding-left: 0pt;
        }

        #l23>li>*:first-child:before {
            content: " ";
            color: black;
            font-family: Symbol, serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        #l24 {
            padding-left: 0pt;
        }

        #l24>li>*:first-child:before {
            content: " ";
            color: black;
            font-family: Symbol, serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        #l25 {
            padding-left: 0pt;
        }

        #l25>li>*:first-child:before {
            content: "- ";
            color: black;
            font-family: "Courier New", monospace;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        #l26 {
            padding-left: 0pt;
        }

        #l26>li>*:first-child:before {
            content: " ";
            color: black;
            font-family: Symbol, serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        #l27 {
            padding-left: 0pt;
        }

        #l27>li>*:first-child:before {
            content: " ";
            color: black;
            font-family: Symbol, serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        li {
            display: block;
        }

        #l28 {
            padding-left: 0pt;
        }

        #l28>li>*:first-child:before {
            content: " ";
            color: black;
            font-family: Symbol, serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        #l29 {
            padding-left: 0pt;
        }

        #l29>li>*:first-child:before {
            content: "o ";
            color: black;
            font-family: "Courier New", monospace;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        li {
            display: block;
        }

        #l30 {
            padding-left: 0pt;
            counter-reset: h1 2;
        }

        #l30>li>*:first-child:before {
            counter-increment: h1;
            content: counter(h1, decimal)". ";
            color: black;
            font-family: "Times New Roman", serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 12pt;
        }

        #l30>li:first-child>*:first-child:before {
            counter-increment: h1 0;
        }

        #l31 {
            padding-left: 0pt;
        }

        #l31>li>*:first-child:before {
            content: "o ";
            color: black;
            font-family: "Courier New", monospace;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        #l32 {
            padding-left: 0pt;
        }

        #l32>li>*:first-child:before {
            content: "o ";
            color: black;
            font-family: "Courier New", monospace;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        #l33 {
            padding-left: 0pt;
        }

        #l33>li>*:first-child:before {
            content: "o ";
            color: black;
            font-family: "Courier New", monospace;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        #l34 {
            padding-left: 0pt;
        }

        #l34>li>*:first-child:before {
            content: "o ";
            color: black;
            font-family: "Courier New", monospace;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        #l35 {
            padding-left: 0pt;
        }

        #l35>li>*:first-child:before {
            content: "o ";
            color: black;
            font-family: "Courier New", monospace;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        #l36 {
            padding-left: 0pt;
        }

        #l36>li>*:first-child:before {
            content: "o ";
            color: black;
            font-family: "Courier New", monospace;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        #l37 {
            padding-left: 0pt;
        }

        #l37>li>*:first-child:before {
            content: "o ";
            color: black;
            font-family: "Courier New", monospace;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        #l38 {
            padding-left: 0pt;
        }

        #l38>li>*:first-child:before {
            content: "o ";
            color: black;
            font-family: "Courier New", monospace;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        li {
            display: block;
        }

        #l39 {
            padding-left: 0pt;
            counter-reset: i1 1;
        }

        #l39>li>*:first-child:before {
            counter-increment: i1;
            content: counter(i1, decimal)". ";
            color: black;
            font-family: "Times New Roman", serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 12pt;
        }

        #l39>li:first-child>*:first-child:before {
            counter-increment: i1 0;
        }

        #l40 {
            padding-left: 0pt;
        }

        #l40>li>*:first-child:before {
            content: "o ";
            color: black;
            font-family: "Courier New", monospace;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        #l41 {
            padding-left: 0pt;
        }

        #l41>li>*:first-child:before {
            content: "o ";
            color: black;
            font-family: "Courier New", monospace;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        #l42 {
            padding-left: 0pt;
        }

        #l42>li>*:first-child:before {
            content: "o ";
            color: black;
            font-family: "Courier New", monospace;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        #l43 {
            padding-left: 0pt;
        }

        #l43>li>*:first-child:before {
            content: "o ";
            color: black;
            font-family: "Courier New", monospace;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        #l44 {
            padding-left: 0pt;
        }

        #l44>li>*:first-child:before {
            content: "o ";
            color: black;
            font-family: "Courier New", monospace;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        li {
            display: block;
        }

        #l45 {
            padding-left: 0pt;
            counter-reset: j1 1;
        }

        #l45>li>*:first-child:before {
            counter-increment: j1;
            content: counter(j1, decimal)". ";
            color: black;
            font-family: "Times New Roman", serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 12pt;
        }

        #l45>li:first-child>*:first-child:before {
            counter-increment: j1 0;
        }

        #l46 {
            padding-left: 0pt;
        }

        #l46>li>*:first-child:before {
            content: "o ";
            color: black;
            font-family: "Courier New", monospace;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        #l47 {
            padding-left: 0pt;
        }

        #l47>li>*:first-child:before {
            content: "o ";
            color: black;
            font-family: "Courier New", monospace;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        #l48 {
            padding-left: 0pt;
        }

        #l48>li>*:first-child:before {
            content: "o ";
            color: black;
            font-family: "Courier New", monospace;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        #l49 {
            padding-left: 0pt;
        }

        #l49>li>*:first-child:before {
            content: "o ";
            color: black;
            font-family: "Courier New", monospace;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        #l50 {
            padding-left: 0pt;
        }

        #l50>li>*:first-child:before {
            content: "o ";
            color: black;
            font-family: "Courier New", monospace;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        #l51 {
            padding-left: 0pt;
        }

        #l51>li>*:first-child:before {
            content: "o ";
            color: black;
            font-family: "Courier New", monospace;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        li {
            display: block;
        }

        #l52 {
            padding-left: 0pt;
            counter-reset: k1 1;
        }

        #l52>li>*:first-child:before {
            counter-increment: k1;
            content: counter(k1, decimal)". ";
            color: black;
            font-family: "Times New Roman", serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 12pt;
        }

        #l52>li:first-child>*:first-child:before {
            counter-increment: k1 0;
        }

        #l53 {
            padding-left: 0pt;
        }

        #l53>li>*:first-child:before {
            content: "o ";
            color: black;
            font-family: "Courier New", monospace;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10pt;
        }

        li {
            display: block;
        }

        #l54 {
            padding-left: 0pt;
            counter-reset: l1 1;
        }

        #l54>li>*:first-child:before {
            counter-increment: l1;
            content: counter(l1, decimal)". ";
            color: black;
            font-family: "Times New Roman", serif;
            font-style: normal;
            font-weight: bold;
            text-decoration: none;
            font-size: 16pt;
        }

        #l54>li:first-child>*:first-child:before {
            counter-increment: l1 0;
        }

        li {
            display: block;
        }

        #l55 {
            padding-left: 0pt;
            counter-reset: m1 1;
        }

        #l55>li>*:first-child:before {
            counter-increment: m1;
            content: counter(m1, decimal)". ";
            color: black;
            font-family: "Times New Roman", serif;
            font-style: normal;
            font-weight: bold;
            text-decoration: none;
            font-size: 16pt;
        }

        #l55>li:first-child>*:first-child:before {
            counter-increment: m1 0;
        }

        table,
        tbody {
            vertical-align: top;
            overflow: visible;
        }
    </style>
</head>

<body>
    <h1 style="padding-top: 4pt;padding-left: 7pt;text-indent: 0pt;text-align: center;">ARECANUT DISEASE DETECTION</h1>
    <p style="padding-top: 14pt;text-indent: 0pt;text-align: left;"><br /></p>
    <h3 style="padding-left: 169pt;text-indent: 0pt;text-align: left;">A PROJECT REPORT</h3>
    <p class="s1" style="padding-top: 14pt;padding-left: 25pt;text-indent: 0pt;text-align: center;">Submitted by,</p>
    <h2 style="padding-top: 13pt;padding-left: 138pt;text-indent: 0pt;text-align: center;">Akash – 20211CSD0116 Prajwal
        A B - 20211CSD0105</h2>
    <h2 style="padding-left: 110pt;text-indent: 0pt;text-align: center;">Sushmashree P S -20211CSD0069 Kavyashree V
        Shetty- 20211CSD0099</h2>
    <h2 style="padding-top: 18pt;padding-left: 5pt;text-indent: 0pt;text-align: center;">Dr.Yamanappa</h2>
    <p style="padding-top: 4pt;text-indent: 0pt;text-align: left;"><br /></p>
    <p class="s1" style="padding-left: 84pt;text-indent: 0pt;line-height: 200%;text-align: center;">in partial
        fulfillment for the award of the degree of</p>
    <h2 style="padding-left: 7pt;text-indent: 0pt;line-height: 18pt;text-align: center;">BACHELOR OF TECHNOLOGY</h2>
    <h3 style="padding-top: 18pt;padding-left: 7pt;text-indent: 0pt;text-align: center;">IN</h3>
    <p style="padding-top: 13pt;padding-left: 7pt;text-indent: 3pt;text-align: center;"><span class="s2"
            style=" background-color: #FF0;">COMPUTER SCIENCE AND ENGINEERING, COMPUTER </span><span class="h3">
        </span><span class="s2" style=" background-color: #FF0;">ENGINEERING, INFORMATION SCIENCE AND ENGINEERING
            Etc.</span></p>
    <h3 style="padding-top: 13pt;padding-left: 8pt;text-indent: 0pt;text-align: center;">At</h3>
    <p style="text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 172pt;text-indent: 0pt;text-align: left;"><span>
            <table border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td><img width="151" height="128"
                            src="data:image/png;base64,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" />
                    </td>
                </tr>
            </table>
        </span></p>
    <h2 style="padding-top: 15pt;padding-left: 84pt;text-indent: 0pt;line-height: 150%;text-align: center;">PRESIDENCY
        UNIVERSITY BENGALURU</h2>
    <h2 style="padding-left: 163pt;text-indent: 0pt;text-align: left;">DECEMBER 2024</h2>
    <p style="text-indent: 0pt;text-align: left;"><br /></p>
    <h2 style="padding-left: 29pt;text-indent: 0pt;text-align: left;">SCHOOL OF COMPUTER SCIENCE ENGINEERING</h2>
    <p style="padding-top: 3pt;text-indent: 0pt;text-align: left;"><br /></p>
    <h2 style="padding-left: 3pt;text-indent: 0pt;text-align: center;">CERTIFICATE</h2>
    <p style="padding-top: 6pt;text-indent: 0pt;text-align: left;"><br /></p>
    <p class="s3" style="padding-left: 22pt;text-indent: 0pt;line-height: 150%;text-align: left;">This is to certify
        that the Project report <b>“ARECANUT DISEASE DETECTION” </b>being submitted by “Prajwal A B, Akash, Kavyashree V
        Shetty, Sushmashree P S” bearing roll number(s) “20211CSD0105,20211CSD0116,20211CSD0099,20211CSD0069” in partial
    </p>
    <p style="padding-left: 22pt;text-indent: 0pt;line-height: 150%;text-align: left;"><span class="s3">fulfillment of
            the requirement for the award of the degree of Bachelor of Technology in </span><span class="s4"
            style=" background-color: #FF0;">Computer Science and Engineering</span><span class="s3"> is a bonafide work
            carried out under my supervision.</span></p>
    <p style="text-indent: 0pt;text-align: left;"><br /></p>
    <table style="border-collapse:collapse;margin-left:8.884pt" cellspacing="0">
        <tr style="height:64pt">
            <td style="width:216pt">
                <p class="s5" style="padding-left: 2pt;padding-right: 95pt;text-indent: 0pt;text-align: left;">
                    Dr.Yamanappa <span class="s6">Asst.Professor School of CSE&amp;IS</span></p>
                <p class="s6" style="padding-left: 2pt;text-indent: 0pt;line-height: 15pt;text-align: left;">Presidency
                    University</p>
            </td>
            <td style="width:216pt">
                <p class="s5" style="padding-left: 89pt;text-indent: 0pt;line-height: 15pt;text-align: left;">Dr. Saira
                    Bhanu</p>
                <p class="s6" style="padding-left: 92pt;text-indent: 0pt;line-height: 16pt;text-align: left;">HoD</p>
                <p class="s6" style="padding-left: 89pt;text-indent: 0pt;line-height: 16pt;text-align: left;">School of
                    CSE&amp;IS Presidency University</p>
            </td>
        </tr>
    </table>
    <p style="text-indent: 0pt;text-align: left;"><br /></p>
    <table style="border-collapse:collapse;margin-left:8.884pt" cellspacing="0">
        <tr style="height:59pt">
            <td style="width:140pt">
                <p class="s7" style="padding-left: 2pt;text-indent: 0pt;line-height: 14pt;text-align: left;">Dr. L.
                    SHAKKEERA</p>
                <p class="s8" style="padding-left: 2pt;text-indent: 0pt;line-height: 15pt;text-align: left;">Associate
                    Dean</p>
                <p class="s8"
                    style="padding-left: 2pt;padding-right: 4pt;text-indent: 0pt;line-height: 15pt;text-align: left;">
                    School of CSE Presidency University</p>
            </td>
            <td style="width:152pt">
                <p class="s7" style="padding-left: 18pt;text-indent: 0pt;line-height: 14pt;text-align: left;">Dr.
                    MYDHILI NAIR</p>
                <p class="s8" style="padding-left: 18pt;text-indent: 0pt;line-height: 15pt;text-align: left;">Associate
                    Dean</p>
                <p class="s8" style="padding-left: 18pt;text-indent: 0pt;line-height: 15pt;text-align: left;">School of
                    CSE Presidency University</p>
            </td>
            <td style="width:180pt">
                <p class="s7" style="padding-left: 15pt;text-indent: 0pt;line-height: 14pt;text-align: left;">Dr.
                    SAMEERUDDIN KHAN</p>
                <p class="s8" style="padding-left: 15pt;text-indent: 0pt;line-height: 15pt;text-align: left;">Pro-Vc
                    School of Engineering</p>
                <p class="s8" style="padding-left: 15pt;text-indent: 0pt;line-height: 15pt;text-align: left;">Dean
                    -School of CSE&amp;IS Presidency University</p>
            </td>
        </tr>
    </table>
    <p style="text-indent: 0pt;text-align: left;"><br /></p>
    <h2 style="padding-left: 29pt;text-indent: 0pt;text-align: left;">SCHOOL OF COMPUTER SCIENCE ENGINEERING</h2>
    <p style="padding-top: 9pt;text-indent: 0pt;text-align: left;"><br /></p>
    <h2 style="padding-left: 3pt;text-indent: 0pt;text-align: center;">DECLARATION</h2>
    <p style="padding-top: 6pt;text-indent: 0pt;text-align: left;"><br /></p>
    <p class="s9" style="padding-left: 5pt;text-indent: 0pt;line-height: 200%;text-align: center;">We hereby declare
        that the work, which is being presented in the project report entitled <span class="h4">ARECANUT DISEASE
            DETECTION </span>in partial fulfillment for the award</p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 200%;text-align: left;"><span class="s9">of Degree of
        </span><span class="h3">Bachelor of Technology </span><span class="s9">in </span><span class="s2"
            style=" background-color: #FF0;">Computer Science and Engineering</span><span class="s9">, is a record of
            our own investigations carried under the guidance of</span></p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 200%;text-align: left;"><span class="s2"
            style=" background-color: #FF0;">Dr.Yamanappa, </span><span class="h3">Asst.Professor, School of Computer
            Science Engineering &amp; Information Science, Presidency University, Bengaluru.</span></p>
    <p style="padding-top: 1pt;text-indent: 0pt;text-align: left;"><br /></p>
    <p class="s9" style="padding-left: 5pt;text-indent: 0pt;line-height: 200%;text-align: left;">We have not submitted
        the matter presented in this report anywhere for the award of any other Degree.</p>
    <h2 style="padding-left: 26pt;text-indent: 0pt;text-align: left;">Prajwal A B - 20211CSD0105 Akash -20211CSD0116
    </h2>
    <h2 style="padding-left: 26pt;text-indent: 0pt;text-align: left;">Kavyashree V Shetty - 20211CSD0099 Sushmashree P S
        -20211CSD0069</h2>
    <h2 style="padding-top: 4pt;padding-left: 3pt;text-indent: 0pt;text-align: center;">ABSTRACT</h2>
    <p style="padding-top: 18pt;text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: justify;">Arecanut, also known as betel
        nut, is a vital tropical crop, with India being the second-largest producer and consumer globally. Despite its
        economic importance, arecanut plants are vulnerable to a variety of diseases affecting their roots, trunk, and
        foliage throughout their growth cycle. Traditional disease detection relies on manual observation, a process
        that is both labor-intensive and prone to inaccuracies. This study presents a novel system utilizing
        Convolutional Neural Networks (CNNs) to automate the identification of arecanut diseases and provide actionable
        remedies. CNNs, a class of deep learning models, analyze input images, learn significant features, and classify
        them with high accuracy. For this research, a custom dataset of 620 images, capturing both healthy and diseased
        samples, was developed and divided into training and testing sets in an 80:20 ratio. The CNN model was trained
        using categorical cross- entropy as the loss function, the Adam optimizer for optimization, and accuracy as the
        performance metric over 50 epochs. The proposed approach achieved a disease detection accuracy of 88.46%,
        demonstrating its effectiveness as a reliable tool for farmers to manage and maintain crop health efficiently.
    </p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: justify;">Keywords: Arecanut, Crop Health
        Monitoring, Convolutional Neural Networks, Deep Learning.</p>
    <p style="text-indent: 0pt;text-align: left;"><br /></p>
    <h2 style="text-indent: 0pt;text-align: center;">ACKNOWLEDGEMENT</h2>
    <p style="padding-top: 5pt;text-indent: 0pt;text-align: left;"><br /></p>
    <p class="s9" style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: justify;">First of all, we
        indebted to the <b>GOD ALMIGHTY </b>for giving me an opportunity to excel in our efforts to complete this
        project on time.</p>
    <p class="s9" style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: justify;">We express our
        sincere thanks to our respected dean <b>Dr. Md. Sameeruddin Khan</b>, Pro-VC, School of Engineering and Dean,
        School of Computer Science Engineering &amp; Information Science, Presidency University for getting us
        permission to undergo the project.</p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: justify;"><span class="s9">We express our
            heartfelt gratitude to our beloved Associate Deans </span><span class="h3">Dr. Shakkeera L and Dr. Mydhili
            Nair, </span><span class="s9">School of Computer Science Engineering &amp; Information Science, Presidency
            University, and Dr. “</span><span class="s10" style=" background-color: #FF0;">Saira Bhanu”, </span><span
            class="s9">Head of the Department, School of Computer Science Engineering &amp; Information Science,
            Presidency University, for rendering timely help in completing this project successfully.</span></p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: justify;"><span class="s9">We are greatly
            indebted to our guide </span><span class="s2" style=" background-color: #FF0;">Dr.Yamanappa, </span><span
            class="h3">Asst.Professor </span><span class="s9">and Reviewer </span><span class="s2"
            style=" background-color: #FF0;">Mr.Harish kumar, </span><span class="h3">Asst.Professor</span><span
            class="s9">, School of Computer Science Engineering &amp; Information Science, Presidency University for
        </span><span class="s10" style=" background-color: #FF0;">his</span><span class="s9"> inspirational guidance,
            and valuable suggestions and for providing us a chance to express our technical capabilities in every
            respect for the completion of the project work.</span></p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: justify;"><span class="s9">We would like
            to convey our gratitude and heartfelt thanks to the PIP2001 Capstone Project Coordinators </span><span
            class="h3">Dr. Sampath A K, Dr. Abdul Khadar A and Mr. Md Zia Ur Rahman, </span><span class="s9">department
            Project Coordinators </span><span class="s10" style=" background-color: #FF0;">“Ms.Manjula”</span><span
            class="s9"> and Git hub coordinator </span><span class="h3">Mr. Muthuraj.</span></p>
    <p class="s9" style="padding-left: 5pt;text-indent: 0pt;line-height: 151%;text-align: justify;">We thank our family
        and friends for the strong support and inspiration they have provided us in bringing out this project.</p>
    <p style="padding-top: 4pt;text-indent: 0pt;text-align: left;"><br /></p>
    <h4 style="text-indent: 0pt;text-align: right;">Prajwal A B</h4>
    <p style="text-indent: 0pt;text-align: left;"><br /></p>
    <h4 style="text-indent: 0pt;text-align: right;">Shetty</h4>
    <h4 style="padding-top: 4pt;padding-left: 128pt;text-indent: -18pt;line-height: 150%;text-align: left;">Akash Kobal
        Kavyashree V</h4>
    <p style="padding-top: 6pt;text-indent: 0pt;text-align: left;"><br /></p>
    <h4 style="padding-left: 110pt;text-indent: 0pt;text-align: left;">Sushmashree P S</h4>
    <p style="padding-top: 4pt;text-indent: 0pt;text-align: left;"><br /></p>
    <p class="s11" style="padding-left: 7pt;text-indent: 0pt;text-align: center;">TABLE OF CONTENTS</p>
    <table style="border-collapse:collapse;margin-left:6.23398pt" cellspacing="0">
        <tr style="height:17pt">
            <td
                style="width:114pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p class="s5" style="padding-left: 5pt;text-indent: 0pt;line-height: 15pt;text-align: left;">CHAPTER NO.
                </p>
            </td>
            <td
                style="width:236pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p class="s5" style="padding-left: 5pt;text-indent: 0pt;line-height: 15pt;text-align: left;">TITLE</p>
            </td>
            <td
                style="width:97pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p class="s5" style="padding-left: 5pt;text-indent: 0pt;line-height: 15pt;text-align: left;">PAGE NO.
                </p>
            </td>
        </tr>
        <tr style="height:17pt">
            <td
                style="width:114pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p class="s5" style="padding-left: 5pt;text-indent: 0pt;line-height: 15pt;text-align: left;">1.</p>
            </td>
            <td
                style="width:236pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p class="s5" style="padding-left: 5pt;text-indent: 0pt;line-height: 15pt;text-align: left;">ABSTRACT
                </p>
            </td>
            <td
                style="width:97pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
        </tr>
        <tr style="height:31pt">
            <td
                style="width:114pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
            <td
                style="width:236pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p class="s5" style="padding-top: 5pt;padding-left: 15pt;text-indent: 0pt;text-align: left;">
                    ACKNOWLEDGMENT</p>
            </td>
            <td
                style="width:97pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
        </tr>
        <tr style="height:17pt">
            <td
                style="width:114pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
            <td
                style="width:236pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p class="s5" style="padding-left: 5pt;text-indent: 0pt;line-height: 15pt;text-align: left;">
                    INTRODUCTION</p>
            </td>
            <td
                style="width:97pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
        </tr>
        <tr style="height:17pt">
            <td
                style="width:114pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
            <td
                style="width:236pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p class="s5" style="padding-left: 5pt;text-indent: 0pt;line-height: 15pt;text-align: left;">1.1 GENERAL
                    OVERVIEW</p>
            </td>
            <td
                style="width:97pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
        </tr>
        <tr style="height:33pt">
            <td
                style="width:114pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
            <td
                style="width:236pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p class="s5" style="padding-left: 5pt;text-indent: 0pt;line-height: 16pt;text-align: left;">1.2
                    RELEVANCE AND PROBLEM STATEMENT</p>
            </td>
            <td
                style="width:97pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
        </tr>
        <tr style="height:17pt">
            <td
                style="width:114pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
            <td
                style="width:236pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p class="s5" style="padding-left: 5pt;text-indent: 0pt;line-height: 15pt;text-align: left;">1.3 SCOPE
                    OF THE PROJECT</p>
            </td>
            <td
                style="width:97pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
        </tr>
        <tr style="height:17pt">
            <td
                style="width:114pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
            <td
                style="width:236pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p class="s5" style="padding-left: 5pt;text-indent: 0pt;line-height: 15pt;text-align: left;">LITERATURE
                    REVIEW</p>
            </td>
            <td
                style="width:97pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
        </tr>
        <tr style="height:17pt">
            <td
                style="width:114pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
            <td
                style="width:236pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p class="s5" style="padding-left: 5pt;text-indent: 0pt;line-height: 15pt;text-align: left;">2.1 GENERAL
                </p>
            </td>
            <td
                style="width:97pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
        </tr>
        <tr style="height:33pt">
            <td
                style="width:114pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
            <td
                style="width:236pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p class="s5" style="padding-left: 5pt;text-indent: 0pt;line-height: 16pt;text-align: left;">RESEARCH
                    GAPS OF EXISTING METHODS</p>
            </td>
            <td
                style="width:97pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
        </tr>
        <tr style="height:41pt">
            <td
                style="width:114pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
            <td
                style="width:236pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p class="s5" style="padding-left: 5pt;text-indent: 0pt;line-height: 16pt;text-align: left;">PROPOSED
                    METHODOLOGIES</p>
            </td>
            <td
                style="width:97pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
        </tr>
        <tr style="height:49pt">
            <td
                style="width:114pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
            <td
                style="width:236pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p class="s5" style="padding-left: 5pt;text-indent: 0pt;line-height: 16pt;text-align: left;">OBJECTIVES
                </p>
            </td>
            <td
                style="width:97pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
        </tr>
        <tr style="height:49pt">
            <td
                style="width:114pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
            <td
                style="width:236pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p class="s5" style="padding-left: 5pt;text-indent: 0pt;line-height: 16pt;text-align: left;">SYSTEM
                    DESIGN &amp;</p>
                <p class="s5" style="padding-top: 8pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">
                    IMPLEMENTATION</p>
            </td>
            <td
                style="width:97pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
        </tr>
        <tr style="height:73pt">
            <td
                style="width:114pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
            <td
                style="width:236pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p class="s5" style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">TIMELINE
                    FOR EXECUTION OF PROJECT</p>
                <p class="s5" style="padding-left: 5pt;text-indent: 0pt;text-align: left;">(GANTT CHART)</p>
            </td>
            <td
                style="width:97pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
        </tr>
        <tr style="height:25pt">
            <td
                style="width:114pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
            <td
                style="width:236pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p class="s5" style="padding-left: 5pt;text-indent: 0pt;line-height: 16pt;text-align: left;">OUTCOMES
                </p>
            </td>
            <td
                style="width:97pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
        </tr>
        <tr style="height:25pt">
            <td
                style="width:114pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
            <td
                style="width:236pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p class="s5" style="padding-left: 5pt;text-indent: 0pt;line-height: 16pt;text-align: left;">RESULTS AND
                    DISCUSSIONS</p>
            </td>
            <td
                style="width:97pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
        </tr>
        <tr style="height:25pt">
            <td
                style="width:114pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
            <td
                style="width:236pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p class="s5" style="padding-left: 5pt;text-indent: 0pt;line-height: 16pt;text-align: left;">CONCLUSION
                </p>
            </td>
            <td
                style="width:97pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
        </tr>
        <tr style="height:25pt">
            <td
                style="width:114pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
            <td
                style="width:236pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p class="s5" style="padding-left: 5pt;text-indent: 0pt;line-height: 16pt;text-align: left;">REFERENCES
                </p>
            </td>
            <td
                style="width:97pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
        </tr>
        <tr style="height:25pt">
            <td
                style="width:114pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
            <td
                style="width:236pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p class="s5" style="padding-left: 5pt;text-indent: 0pt;text-align: left;">PSUEDOCODE</p>
            </td>
            <td
                style="width:97pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
        </tr>
        <tr style="height:25pt">
            <td
                style="width:114pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
            <td
                style="width:236pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p class="s5" style="padding-left: 5pt;text-indent: 0pt;line-height: 16pt;text-align: left;">SCREENSHOTS
                </p>
            </td>
            <td
                style="width:97pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
        </tr>
        <tr style="height:25pt">
            <td
                style="width:114pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
            <td
                style="width:236pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p class="s5" style="padding-left: 5pt;text-indent: 0pt;line-height: 16pt;text-align: left;">ENCLOSURES
                </p>
            </td>
            <td
                style="width:97pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-right-style:solid;border-right-width:1pt">
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </td>
        </tr>
    </table>
    <h2 style="padding-top: 4pt;padding-left: 165pt;text-indent: 0pt;line-height: 150%;text-align: center;">CHAPTER-1
        INTRODUCTION</h2>
    <p style="padding-top: 13pt;text-indent: 0pt;text-align: left;"><br /></p>
    <ol id="l1">
        <ol id="l2">
            <li data-list-text="1.1">
                <h3 style="padding-left: 26pt;text-indent: -20pt;text-align: left;">General Overview</h3>
                <p style="padding-top: 5pt;text-indent: 0pt;text-align: left;"><br /></p>
                <p style="padding-left: 26pt;text-indent: 0pt;text-align: justify;">Agriculture serves as the backbone
                    of many economies, particularly in tropical regions where a variety of crops hold cultural and
                    economic significance. One such crop is arecanut, commonly known as betel nut, which plays a crucial
                    role in the livelihoods of millions of farmers. India, being the second-largest producer of
                    arecanut, relies heavily on its cultivation for socio- economic sustainability. However, like any
                    agricultural product, arecanut crops are vulnerable to numerous diseases affecting their roots,
                    trunks, leaves, and fruits. These diseases, if left undetected and untreated, can lead to
                    substantial crop losses, jeopardizing the income of farmers and impacting the agricultural sector at
                    large.</p>
                <p style="padding-top: 14pt;padding-left: 26pt;text-indent: 0pt;text-align: justify;">Traditional
                    methods of diagnosing plant diseases typically involve manual inspection, a process dependent on the
                    expertise and availability of agricultural specialists. These methods, while effective to an extent,
                    are time-consuming, labor-intensive, and prone to human error. The advent of advanced technologies,
                    such as machine learning and image processing, offers promising alternatives that are both efficient
                    and scalable.</p>
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </li>
            <li data-list-text="1.2">
                <h3 style="padding-left: 26pt;text-indent: -20pt;text-align: left;">Relevance and Problem Statement</h3>
                <p style="padding-top: 5pt;text-indent: 0pt;text-align: left;"><br /></p>
                <p style="padding-left: 26pt;text-indent: 0pt;text-align: justify;">In recent years, technological
                    advancements in artificial intelligence (AI) have transformed numerous industries, including
                    agriculture. By leveraging the power of deep learning models, particularly Convolutional Neural
                    Networks (CNNs), it is now possible to analyze images of crops and detect diseases with remarkable
                    accuracy. This approach holds immense potential for addressing the challenges associated with
                    arecanut disease detection.</p>
                <p style="padding-top: 4pt;padding-left: 26pt;text-indent: 0pt;text-align: justify;">The primary issue
                    faced by arecanut farmers is the lack of early disease identification tools, leading to delayed
                    intervention and significant economic losses. The need for an automated, accurate, and
                    cost-effective solution is evident. Such a system would enable farmers to monitor the health of
                    their crops, detect diseases in their early stages, and implement appropriate remedies without
                    relying on exhaustive manual efforts.</p>
                <p style="text-indent: 0pt;text-align: left;"><br /></p>
            </li>
            <li data-list-text="1.3">
                <h3 style="padding-left: 26pt;text-indent: -20pt;text-align: left;">Scope of the Project</h3>
            </li>
        </ol>
    </ol>
    <p style="padding-top: 5pt;text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 26pt;text-indent: 0pt;text-align: justify;">The <i>Arecanut Disease Detection </i>project
        aims to bridge the gap between traditional farming practices and modern technological innovations. The study
        focuses on the development of an AI-driven system capable of identifying diseases in arecanut crops through
        image classification. The proposed system utilizes a dataset comprising images of healthy and diseased arecanut
        plants, including leaves, trunks, and nuts. These images are preprocessed and fed into a CNN model, which is
        trained to detect specific diseases affecting the crop.</p>
    <p style="padding-top: 14pt;padding-left: 26pt;text-indent: 0pt;text-align: justify;">The system further integrates
        actionable recommendations, offering farmers precise solutions to combat identified diseases. By addressing the
        limitations of current practices, the project aims to enhance crop management efficiency, reduce losses, and
        support sustainable agricultural practices.</p>
    <h2 style="padding-top: 4pt;padding-left: 141pt;text-indent: 42pt;line-height: 150%;text-align: left;">CHAPTER-2
        LITERATURE SURVEY</h2>
    <p style="padding-top: 8pt;text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">Recent studies have explored
        disease detection in plants, including arecanut, using image processing and machine learning techniques. For
        instance, Dhanuja K C (2020) developed a system for arecanut disease detection using texture-based grading and
        K-nearest neighbor (KNN) algorithm with a dataset of 144 samples.</p>
    <p style="padding-top: 9pt;text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">Similarly, Manpreet Sandhu et al.
        (2020) employed machine learning algorithms for leaf image classification to detect spots or rot on leaves,
        utilizing drone-captured images. Ashish Nage et al. (2019) created an Android application for plant disease
        identification using convolutional neural networks (CNN).</p>
    <p style="padding-top: 9pt;text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">Swathy Ann Sam et al. (2020)
        compared the performance of CNN, KNN, SVM, and Decision Trees in plant disease detection, achieving 86% accuracy
        with CNN. These studies primarily focused on general plant leaves, employing image processing and machine
        learning algorithms like SVM, CNN, KNN, and Decision Trees.</p>
    <p style="padding-top: 9pt;text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">This research builds upon existing
        studies by focusing on arecanut disease detection using CNN and open-source datasets, expanding the scope to
        include trunk and fruit analysis in addition to leaf-based detection.</p>
    <h2 style="padding-top: 4pt;padding-left: 145pt;text-indent: 0pt;text-align: left;">CHAPTER-3</h2>
    <h2 style="padding-top: 9pt;text-indent: 0pt;text-align: center;">RESEARCH GAPS OF EXISTING METHODS</h2>
    <p style="text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">Our CNN-based disease detection in
        arecanut having several research gaps persist. Data-related limitations include small and imbalanced datasets,
        inadequate representation of diverse arecanut varieties and diseases, and poor data quality. The Methodological
        shortcomings encompass overfitting/underfitting, limited feature extraction, and ineffective transfer learning.
        Our model will be based on Performance-wise, existing models often struggle with accuracy, speed, and
        robustness.</p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">To improve disease detection in
        arecanut plants, future research should prioritize collecting more diverse and high-quality data, developing
        better models and training methods, and adapting existing models for arecanut disease detection. Enabling
        real-time disease detection and integrating versatile models with existing farming systems are also crucial. By
        addressing these areas, researchers can significantly enhance disease detection accuracy, efficiency, and
        practicality, ultimately benefiting arecanut farmers and the industry.</p>
    <p style="padding-top: 9pt;text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 5pt;text-indent: 0pt;text-align: left;">Key research gaps:</p>
    <ul id="l3">
        <li data-list-text="-">
            <p style="padding-top: 9pt;padding-left: 15pt;text-indent: -9pt;text-align: left;">Data limitations on bases
                of size, diversity, quality.</p>
        </li>
        <li data-list-text="-">
            <p style="padding-top: 9pt;padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">
                Methodological shortcomings on overfitting, feature extraction, transfer learning</p>
        </li>
    </ul>
    <h2 style="padding-top: 4pt;padding-left: 116pt;text-indent: 66pt;line-height: 150%;text-align: left;">CHAPTER-4
        PROPOSED MOTHODOLOGY</h2>
    <p style="padding-top: 8pt;text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">The authors have used the dataset
        of healthy and disease leaf to detect different diseases of leaves. The images were taken from using a digital
        camera at a distance of half-meter from the plant. The diseased and healthy arecanut images are taken from the
        arecanut plantations in Shimoga District, Karnataka, India. Inputs from researchers in the area of arecanut and
        farmers were taken into consideration while taking the photographs. The images taken consist of both healthy and
        diseased leaf, trunk, and nuts.</p>
    <p style="padding-top: 9pt;text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">They had been explored the
        application of Convolutional Neural Network(CNN) on bases arecanut Disease detection. A CNN model is trained on
        large dataset of image of healthy and diseased arecanut leaves, learning to identify the visual patterns
        associated with different diseases. When presented with a new image, the network can classify it as either
        healthy or diseased, and eventually identify the disease present.</p>
    <p style="padding-top: 9pt;text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">They can be processed with an
        automated system for detecting disease using leaf image classification. The presence of spots or rotting areas
        in the plant leaf will be detected automatically by using CNN algorithms. Here the dataset is created for
        training a neural network for image classification. The dataset was collected manually</p>
    <p style="padding-top: 4pt;padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">from the field.
        In this paper to get better feature extraction, image reprocessing, which includes intensity normalization, and
        masking portions of the image. Then, using these processed images, a deep convolutional neural network model was
        trained to classify the images and CNN model will be operated for desired output.</p>
    <p style="padding-top: 9pt;text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">To train and test the models, a
        diverse range of images of both healthy and diseased specimens are utilized. Due to the dataset&#39;s limited
        size, data augmentation techniques are employed to generate new training data through rotations, zooming,
        shifting, and flipping, artificially expanding the dataset. The model undergoes 50 epochs of training to
        optimize performance, achieving high validation and test accuracy while minimizing loss.</p>
    <p style="padding-top: 9pt;text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">This project works on uploading a
        captured image of sample to the system and algorithm will detect weather the sample is affected by any diseases
        or not, if it is affected by any disease, it will print the detected disease, for this detection we had used CNN
        which gave an accurate desired output</p>
    <h2 style="padding-top: 4pt;padding-left: 134pt;text-indent: 0pt;line-height: 150%;text-align: center;">CHAPTER-5
        OBJECTIVES</h2>
    <p style="padding-top: 5pt;text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: justify;">The primary goal of this
        research is to design a robust, automated system for the early detection, classification, and management of
        arecanut diseases, leveraging advanced machine learning and image processing techniques. Arecanut is a vital
        crop, especially in regions like India, where it plays a significant role in the agricultural economy. However,
        diseases affecting arecanut pose a major challenge, causing substantial losses if not addressed early. This
        study aims to revolutionize disease detection by introducing technology-driven solutions that are efficient,
        accurate, and accessible to farmers.</p>
    <p style="padding-top: 9pt;text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 5pt;text-indent: 0pt;text-align: justify;">Comprehensive Dataset Creation:</p>
    <p style="padding-top: 9pt;padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: justify;">The foundation
        of this research lies in the development of a well- curated dataset consisting of high-resolution images of both
        healthy and diseased arecanuts, including their leaves, trunks, and nuts. These images are collected with expert
        guidance and under controlled conditions to capture a variety of diseases such as Mahali (Koleroga), Stem
        Bleeding, and Yellow Leaf Spot. The dataset undergoes preprocessing steps like resizing, noise reduction, and
        normalization to ensure it is optimized for training deep learning models. This extensive dataset serves as the
        backbone for training and testing the system.</p>
    <p style="padding-top: 4pt;padding-left: 5pt;text-indent: 0pt;text-align: justify;">Automated Disease Detection:</p>
    <p style="padding-top: 9pt;padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: justify;">The research
        focuses on using Convolutional Neural Networks (CNNs), a powerful deep learning algorithm, to automate the
        detection of arecanut diseases. CNNs are designed to process images, extract meaningful patterns, and classify
        diseases based on the visual features of affected crops. This approach eliminates the need for manual
        inspection, which is often time-consuming, labor-intensive, and less reliable. The system is designed to
        accurately differentiate between healthy crops and those affected by specific diseases, ensuring scalability and
        adaptability across diverse agricultural conditions.</p>
    <p style="padding-top: 9pt;text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 5pt;text-indent: 0pt;text-align: justify;">Solution Recommendation System:</p>
    <p style="padding-top: 9pt;padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: justify;">In addition to
        detecting diseases, the system includes a solution module that suggests effective remedies for the identified
        issues. This feature provides farmers with actionable steps to mitigate disease impact, improve crop health, and
        enhance yield. By integrating expert knowledge into the recommendation system, the tool becomes a practical
        resource for farmers seeking to address issues quickly and efficiently.</p>
    <p style="padding-top: 9pt;text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 5pt;text-indent: 0pt;text-align: justify;">Early Intervention and Cost Efficiency:</p>
    <p style="padding-top: 9pt;padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: justify;">A critical
        objective of this research is to enable early detection of arecanut diseases, which is essential to prevent
        their spread and minimize losses. The automated system reduces reliance on traditional inspection methods, which
        often require expensive equipment,</p>
    <p style="padding-top: 4pt;padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: justify;">extensive
        manpower, and time. This makes the solution cost-effective and accessible, especially for small-scale farmers.
    </p>
    <p style="padding-top: 9pt;text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 5pt;text-indent: 0pt;text-align: justify;">Advancing Smart Farming Practices:</p>
    <p style="padding-top: 9pt;padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: justify;">This research
        aims to promote smart farming by integrating cutting- edge technology into the agricultural workflow. The system
        combines advanced data augmentation techniques, optimized neural network structures, and user-friendly
        interfaces to create a tool that simplifies disease detection for farmers. By empowering farmers with
        technology, this initiative fosters sustainable farming practices and supports better decision-making to improve
        overall productivity.</p>
    <p style="padding-top: 9pt;text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: justify;">By achieving these objectives,
        the study contributes to a significant reduction in crop losses, promotes economic sustainability for farmers,
        and serves as a model for applying artificial intelligence to broader agricultural challenges.</p>
    <h2 style="padding-top: 4pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">CHAPTER-6</h2>
    <h2 style="padding-top: 9pt;padding-left: 5pt;text-indent: 0pt;text-align: center;">SYSTEM DESIGN &amp;
        IMPLEMENTATION</h2>
    <p style="padding-top: 4pt;text-indent: 0pt;text-align: left;"><br /></p>
    <ol id="l4">
        <li data-list-text="1.">
            <p class="s3" style="padding-left: 17pt;text-indent: -12pt;text-align: left;">Objective</p>
            <p style="text-indent: 0pt;text-align: left;"><br /></p>
            <p class="s3" style="padding-left: 5pt;text-indent: 0pt;text-align: left;">The system is designed to build,
                train, and evaluate a Convolutional Neural Network (CNN) for classifying images in a dataset. It
                supports functionality for data preprocessing, visualization, model training, and prediction.</p>
            <p style="padding-top: 11pt;text-indent: 0pt;text-align: left;"><br /></p>
            <p style="padding-left: 5pt;text-indent: 0pt;line-height: 2pt;text-align: left;" />
        </li>
        <li data-list-text="2.">
            <h4 style="padding-top: 2pt;padding-left: 204pt;text-indent: -12pt;text-align: left;">Components</h4>
            <ol id="l5">
                <li data-list-text="2.1.">
                    <p class="s13" style="padding-top: 2pt;padding-left: 24pt;text-indent: -18pt;text-align: left;">
                        Input Data</p>
                    <p style="padding-top: 1pt;text-indent: 0pt;text-align: left;"><br /></p>
                    <ul id="l6">
                        <li data-list-text="">
                            <p class="s15"
                                style="padding-left: 41pt;text-indent: -17pt;line-height: 13pt;text-align: left;">
                                <b>Source</b>: Image dataset stored in <span class="s16">Arecanut_dataset/train/</span>.
                            </p>
                        </li>
                        <li data-list-text="">
                            <p class="s14"
                                style="padding-left: 41pt;text-indent: -17pt;line-height: 12pt;text-align: left;">
                                Structure<span class="s15">: The dataset is organized into folders, where each folder
                                    represents a class.</span></p>
                            <p style="padding-top: 1pt;text-indent: 0pt;text-align: left;"><br /></p>
                        </li>
                    </ul>
                </li>
                <li data-list-text="2.2.">
                    <p class="s13" style="padding-left: 24pt;text-indent: -18pt;text-align: left;">Preprocessing</p>
                    <p style="padding-top: 1pt;text-indent: 0pt;text-align: left;"><br /></p>
                    <ul id="l7">
                        <li data-list-text="">
                            <p class="s15"
                                style="padding-left: 41pt;text-indent: -17pt;line-height: 13pt;text-align: left;">
                                <b>Resizing</b>: Images are resized to <span class="s16">256x256 </span>pixels.</p>
                        </li>
                        <li data-list-text="">
                            <p class="s15"
                                style="padding-left: 41pt;text-indent: -17pt;line-height: 13pt;text-align: left;">
                                <b>Normalization</b>: Pixel values are scaled to the range <span class="s16">[0,
                                    1]</span>.</p>
                        </li>
                        <li data-list-text="">
                            <p class="s14"
                                style="padding-left: 41pt;text-indent: -17pt;line-height: 12pt;text-align: left;">
                                Augmentation<span class="s15">: Images are augmented using random flips and
                                    rotations.</span></p>
                            <p style="padding-top: 1pt;text-indent: 0pt;text-align: left;"><br /></p>
                        </li>
                    </ul>
                </li>
                <li data-list-text="2.3.">
                    <p class="s13" style="padding-left: 24pt;text-indent: -18pt;text-align: left;">Data Splitting</p>
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    <ul id="l8">
                        <li data-list-text="">
                            <p class="s15"
                                style="padding-left: 41pt;text-indent: -17pt;line-height: 13pt;text-align: left;">
                                Training, validation, and testing datasets are created with an 80-10-10 split.</p>
                        </li>
                        <li data-list-text="">
                            <p class="s15"
                                style="padding-left: 41pt;text-indent: -17pt;line-height: 13pt;text-align: left;">The
                                datasets are shuffled, cached, and pre-fetched for efficient processing.</p>
                            <p style="padding-top: 1pt;text-indent: 0pt;text-align: left;"><br /></p>
                        </li>
                    </ul>
                </li>
                <li data-list-text="2.4.">
                    <p class="s13" style="padding-left: 24pt;text-indent: -18pt;text-align: left;">Model Architecture
                    </p>
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    <ul id="l9">
                        <li data-list-text="">
                            <p class="s15" style="padding-left: 41pt;text-indent: -18pt;text-align: left;">A
                                <b>Sequential CNN </b>with six convolutional layers, max-pooling layers, and dense
                                layers for feature extraction and classification.</p>
                        </li>
                        <li data-list-text="">
                            <p class="s15" style="padding-left: 41pt;text-indent: -17pt;text-align: left;">The final
                                layer uses the <span class="s16">softmax </span>activation function to output
                                probabilities for <span class="s16">n_classes</span>.</p>
                            <p style="padding-top: 1pt;text-indent: 0pt;text-align: left;"><br /></p>
                        </li>
                    </ul>
                </li>
                <li data-list-text="2.5.">
                    <p class="s13" style="padding-left: 24pt;text-indent: -18pt;text-align: left;">Training</p>
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    <ul id="l10">
                        <li data-list-text="">
                            <p class="s14"
                                style="padding-left: 41pt;text-indent: -17pt;line-height: 13pt;text-align: left;">Loss
                                Function<span class="s15">: Sparse Categorical Cross-Entropy.</span></p>
                        </li>
                        <li data-list-text="">
                            <p class="s14"
                                style="padding-left: 41pt;text-indent: -17pt;line-height: 13pt;text-align: left;">
                                Optimizer<span class="s15">: Adam.</span></p>
                        </li>
                        <li data-list-text="">
                            <p class="s14"
                                style="padding-left: 41pt;text-indent: -17pt;line-height: 13pt;text-align: left;">
                                Metrics<span class="s15">: Accuracy.</span></p>
                        </li>
                        <li data-list-text="">
                            <p class="s14"
                                style="padding-left: 41pt;text-indent: -17pt;line-height: 13pt;text-align: left;">
                                Epochs<span class="s15">: 50 (sample run shown for 5 epochs in the code).</span></p>
                            <p style="padding-top: 1pt;text-indent: 0pt;text-align: left;"><br /></p>
                        </li>
                    </ul>
                </li>
                <li data-list-text="2.6.">
                    <p class="s13" style="padding-left: 24pt;text-indent: -18pt;text-align: left;">Evaluation</p>
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    <ul id="l11">
                        <li data-list-text="">
                            <p class="s15"
                                style="padding-left: 41pt;text-indent: -17pt;line-height: 13pt;text-align: left;">Model
                                performance is evaluated using metrics like training/validation accuracy and loss.</p>
                        </li>
                        <li data-list-text="">
                            <p class="s15"
                                style="padding-left: 41pt;text-indent: -17pt;line-height: 13pt;text-align: left;">
                                Visualizations of the metrics over epochs are provided.</p>
                            <p style="padding-top: 1pt;text-indent: 0pt;text-align: left;"><br /></p>
                        </li>
                    </ul>
                </li>
                <li data-list-text="2.7.">
                    <p class="s13" style="padding-left: 24pt;text-indent: -18pt;text-align: left;">Prediction</p>
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    <ul id="l12">
                        <li data-list-text="">
                            <p class="s15"
                                style="padding-left: 41pt;text-indent: -17pt;line-height: 13pt;text-align: left;">A
                                function predicts the class and confidence for given images.</p>
                        </li>
                        <li data-list-text="">
                            <p class="s15"
                                style="padding-left: 41pt;text-indent: -17pt;line-height: 13pt;text-align: left;">Test
                                samples are visualized with actual and predicted labels, along with confidence scores.
                            </p>
                        </li>
                    </ul>
                </li>
                <li data-list-text="2.8.">
                    <p class="s13" style="padding-top: 4pt;padding-left: 24pt;text-indent: -18pt;text-align: left;">
                        Model Saving</p>
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    <ul id="l13">
                        <li data-list-text="">
                            <p class="s15" style="padding-left: 41pt;text-indent: -17pt;text-align: left;">The trained
                                model is saved with version control.</p>
                            <p style="padding-top: 11pt;text-indent: 0pt;text-align: left;"><br /></p>
                            <p style="padding-left: 5pt;text-indent: 0pt;line-height: 2pt;text-align: left;" />
                        </li>
                    </ul>
                </li>
            </ol>
        </li>
        <li data-list-text="3.">
            <h4 style="padding-top: 2pt;padding-left: 210pt;text-indent: -12pt;text-align: left;">Workflow</h4>
            <ol id="l14">
                <li data-list-text="3.1.">
                    <p class="s13" style="padding-top: 2pt;padding-left: 24pt;text-indent: -18pt;text-align: left;">Data
                        Loading</p>
                    <p style="padding-top: 1pt;text-indent: 0pt;text-align: left;"><br /></p>
                    <ul id="l15">
                        <li data-list-text="">
                            <p class="s15" style="padding-left: 41pt;text-indent: -18pt;text-align: left;">The dataset
                                is loaded using <span class="s16">image_dataset_from_directory </span>with shuffled
                                batches of size 32.</p>
                        </li>
                        <li data-list-text="">
                            <p class="s15"
                                style="padding-left: 41pt;text-indent: -17pt;line-height: 13pt;text-align: left;">Class
                                names are inferred from folder names.</p>
                            <p style="padding-top: 1pt;text-indent: 0pt;text-align: left;"><br /></p>
                        </li>
                    </ul>
                </li>
                <li data-list-text="3.2.">
                    <p class="s13" style="padding-left: 24pt;text-indent: -18pt;text-align: left;">Preprocessing
                        Pipeline</p>
                    <p style="padding-top: 1pt;text-indent: 0pt;text-align: left;"><br /></p>
                    <ul id="l16">
                        <li data-list-text="">
                            <p class="s15"
                                style="padding-left: 41pt;text-indent: -17pt;line-height: 13pt;text-align: left;">Images
                                are normalized to <span class="s16">[0, 1] </span>using <span
                                    class="s16">Rescaling</span>.</p>
                        </li>
                        <li data-list-text="">
                            <p class="s15"
                                style="padding-left: 41pt;text-indent: -17pt;line-height: 12pt;text-align: left;">Data
                                augmentation applies random flips and rotations.</p>
                            <p style="padding-top: 1pt;text-indent: 0pt;text-align: left;"><br /></p>
                        </li>
                    </ul>
                </li>
                <li data-list-text="3.3.">
                    <p class="s13" style="padding-left: 24pt;text-indent: -18pt;text-align: left;">Dataset Partitioning
                    </p>
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    <ul id="l17">
                        <li data-list-text="">
                            <p class="s15" style="padding-left: 41pt;text-indent: -17pt;text-align: left;">Training,
                                validation, and test datasets are split and shuffled.</p>
                        </li>
                        <li data-list-text="">
                            <p class="s15" style="padding-left: 41pt;text-indent: -17pt;text-align: left;">Pre-fetching
                                is used to optimize performance.</p>
                            <p style="padding-top: 1pt;text-indent: 0pt;text-align: left;"><br /></p>
                        </li>
                    </ul>
                </li>
                <li data-list-text="3.4.">
                    <p class="s13" style="padding-left: 24pt;text-indent: -18pt;text-align: left;">Model Training</p>
                    <p style="padding-top: 1pt;text-indent: 0pt;text-align: left;"><br /></p>
                    <ul id="l18">
                        <li data-list-text="">
                            <p class="s15"
                                style="padding-left: 41pt;text-indent: -17pt;line-height: 13pt;text-align: left;">
                                <b>Input Shape</b>: <span class="s16">(BATCH_SIZE, IMAGE_SIZE, IMAGE_SIZE,
                                    CHANNELS)</span>.</p>
                        </li>
                        <li data-list-text="">
                            <p class="s15"
                                style="padding-left: 41pt;text-indent: -17pt;line-height: 12pt;text-align: left;">The
                                CNN extracts features and maps them to class probabilities.</p>
                            <p style="padding-top: 1pt;text-indent: 0pt;text-align: left;"><br /></p>
                        </li>
                    </ul>
                </li>
                <li data-list-text="3.5.">
                    <p class="s13" style="padding-left: 24pt;text-indent: -18pt;text-align: left;">Model Evaluation</p>
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    <ul id="l19">
                        <li data-list-text="">
                            <p class="s15"
                                style="padding-left: 41pt;text-indent: -17pt;line-height: 13pt;text-align: left;">
                                Accuracy and loss metrics are calculated for training and validation data.</p>
                        </li>
                        <li data-list-text="">
                            <p class="s15"
                                style="padding-left: 41pt;text-indent: -17pt;line-height: 13pt;text-align: left;">
                                Metrics are visualized over training epochs.</p>
                            <p style="padding-top: 1pt;text-indent: 0pt;text-align: left;"><br /></p>
                        </li>
                    </ul>
                </li>
                <li data-list-text="3.6.">
                    <p class="s13" style="padding-left: 24pt;text-indent: -18pt;text-align: left;">Predictions</p>
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    <ul id="l20">
                        <li data-list-text="">
                            <p class="s15" style="padding-left: 41pt;text-indent: -17pt;text-align: left;">A custom
                                function predicts the class of images with confidence scores.</p>
                        </li>
                        <li data-list-text="">
                            <p class="s15" style="padding-left: 41pt;text-indent: -17pt;text-align: left;">Predictions
                                are displayed alongside actual labels.</p>
                            <p style="padding-top: 1pt;text-indent: 0pt;text-align: left;"><br /></p>
                        </li>
                    </ul>
                </li>
                <li data-list-text="3.7.">
                    <p class="s13" style="padding-left: 24pt;text-indent: -18pt;text-align: left;">Model Saving</p>
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    <ul id="l21">
                        <li data-list-text="">
                            <p class="s15" style="padding-left: 41pt;text-indent: -17pt;text-align: left;">The model is
                                saved with versioning in a designated folder.</p>
                            <p style="padding-top: 11pt;text-indent: 0pt;text-align: left;"><br /></p>
                            <p style="padding-left: 5pt;text-indent: 0pt;line-height: 2pt;text-align: left;" />
                        </li>
                    </ul>
                </li>
            </ol>
        </li>
        <li data-list-text="4.">
            <h4 style="padding-top: 2pt;padding-left: 176pt;text-indent: -12pt;text-align: left;">Implementation Details
            </h4>
            <ol id="l22">
                <li data-list-text="4.1.">
                    <p class="s13" style="padding-top: 2pt;padding-left: 24pt;text-indent: -18pt;text-align: left;">
                        Libraries Used</p>
                    <p style="padding-top: 1pt;text-indent: 0pt;text-align: left;"><br /></p>
                    <ul id="l23">
                        <li data-list-text="">
                            <p class="s16" style="padding-left: 41pt;text-indent: -17pt;text-align: left;">TensorFlow
                                <span class="s15">and </span>Keras<span class="s15">: For model building and
                                    training.</span></p>
                        </li>
                        <li data-list-text="">
                            <p class="s16"
                                style="padding-left: 41pt;text-indent: -17pt;line-height: 13pt;text-align: left;">
                                Matplotlib<span class="s15">: For visualization.</span></p>
                        </li>
                        <li data-list-text="">
                            <p class="s16"
                                style="padding-left: 41pt;text-indent: -17pt;line-height: 13pt;text-align: left;">
                                NumPy<span class="s15">: For data manipulation.</span></p>
                        </li>
                        <li data-list-text="">
                            <p class="s16" style="padding-left: 41pt;text-indent: -17pt;text-align: left;">os<span
                                    class="s15">: For versioned saving of models.</span></p>
                        </li>
                    </ul>
                </li>
                <li data-list-text="4.2.">
                    <p class="s13" style="padding-top: 4pt;padding-left: 24pt;text-indent: -18pt;text-align: left;">Key
                        Configurations</p>
                    <p style="padding-top: 1pt;text-indent: 0pt;text-align: left;"><br /></p>
                    <ul id="l24">
                        <li data-list-text="">
                            <p class="s16"
                                style="padding-left: 41pt;text-indent: -17pt;line-height: 13pt;text-align: left;">
                                IMAGE_SIZE<span class="s15">: 256x256 pixels.</span></p>
                        </li>
                        <li data-list-text="">
                            <p class="s16"
                                style="padding-left: 41pt;text-indent: -17pt;line-height: 13pt;text-align: left;">
                                BATCH_SIZE<span class="s15">: 32.</span></p>
                        </li>
                        <li data-list-text="">
                            <p class="s16" style="padding-left: 41pt;text-indent: -17pt;text-align: left;">CHANNELS<span
                                    class="s15">: 3 (RGB images).</span></p>
                        </li>
                        <li data-list-text="">
                            <p class="s16" style="padding-left: 41pt;text-indent: -17pt;text-align: left;">EPOCHS<span
                                    class="s15">: Configurable (default 50).</span></p>
                            <p style="padding-top: 1pt;text-indent: 0pt;text-align: left;"><br /></p>
                        </li>
                    </ul>
                </li>
                <li data-list-text="4.3.">
                    <p class="s13" style="padding-left: 24pt;text-indent: -18pt;text-align: left;">Model Architecture
                    </p>
                    <ul id="l25">
                        <li data-list-text="-">
                            <p class="s16" style="padding-left: 17pt;text-indent: -11pt;text-align: left;">Resizing and
                                Rescaling</p>
                        </li>
                        <li data-list-text="-">
                            <p class="s16"
                                style="padding-left: 17pt;text-indent: -11pt;line-height: 11pt;text-align: left;">Conv2D
                                (32 filters, ReLU) -&gt; MaxPooling2D</p>
                        </li>
                        <li data-list-text="-">
                            <p class="s16"
                                style="padding-left: 17pt;text-indent: -11pt;line-height: 11pt;text-align: left;">Conv2D
                                (64 filters, ReLU) -&gt; MaxPooling2D</p>
                        </li>
                        <li data-list-text="-">
                            <p class="s16"
                                style="padding-left: 17pt;text-indent: -11pt;line-height: 11pt;text-align: left;">Repeat
                                Conv2D-MaxPooling block 4 more times</p>
                        </li>
                        <li data-list-text="-">
                            <p class="s16"
                                style="padding-left: 17pt;text-indent: -11pt;line-height: 11pt;text-align: left;">
                                Flatten</p>
                        </li>
                        <li data-list-text="-">
                            <p class="s16"
                                style="padding-left: 17pt;text-indent: -11pt;line-height: 11pt;text-align: left;">Dense
                                (64 units, ReLU)</p>
                        </li>
                        <li data-list-text="-">
                            <p class="s16" style="padding-left: 17pt;text-indent: -11pt;text-align: left;">Dense
                                (n_classes, Softmax)</p>
                        </li>
                    </ul>
                </li>
                <li data-list-text="4.4.">
                    <p class="s13" style="padding-top: 1pt;padding-left: 24pt;text-indent: -18pt;text-align: left;">
                        Training Process</p>
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    <ul id="l26">
                        <li data-list-text="">
                            <p class="s15"
                                style="padding-left: 41pt;text-indent: -17pt;line-height: 13pt;text-align: left;">
                                Dataset partitioned into training, validation, and test sets.</p>
                        </li>
                        <li data-list-text="">
                            <p class="s15"
                                style="padding-left: 41pt;text-indent: -17pt;line-height: 13pt;text-align: left;">
                                Training is performed with 5 epochs as a sample run.</p>
                        </li>
                        <li data-list-text="">
                            <p class="s15" style="padding-left: 41pt;text-indent: -17pt;text-align: left;">Real-time
                                evaluation is conducted using validation data.</p>
                            <p style="padding-top: 1pt;text-indent: 0pt;text-align: left;"><br /></p>
                        </li>
                    </ul>
                </li>
                <li data-list-text="4.5.">
                    <p class="s13" style="padding-left: 24pt;text-indent: -18pt;text-align: left;">Visualization</p>
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    <ul id="l27">
                        <li data-list-text="">
                            <p class="s15"
                                style="padding-left: 41pt;text-indent: -17pt;line-height: 13pt;text-align: left;">
                                Training and validation accuracy/loss trends are visualized.</p>
                        </li>
                        <li data-list-text="">
                            <p class="s15"
                                style="padding-left: 41pt;text-indent: -17pt;line-height: 13pt;text-align: left;">Test
                                predictions are displayed with actual labels and confidence.</p>
                            <p style="padding-top: 1pt;text-indent: 0pt;text-align: left;"><br /></p>
                        </li>
                    </ul>
                </li>
                <li data-list-text="4.6.">
                    <p class="s13" style="padding-left: 24pt;text-indent: -18pt;text-align: left;">Prediction Function
                    </p>
                    <p class="s16" style="padding-left: 5pt;text-indent: 0pt;line-height: 11pt;text-align: left;">def
                        predict(model, img):</p>
                    <p class="s16" style="padding-left: 29pt;text-indent: 0pt;text-align: left;">img_array =
                        tf.keras.preprocessing.image.img_to_array(img) img_array = tf.expand_dims(img_array, 0)</p>
                    <p class="s16" style="padding-left: 29pt;text-indent: 0pt;text-align: left;">predictions =
                        model.predict(img_array)</p>
                    <p class="s16" style="padding-left: 29pt;text-indent: 0pt;text-align: left;">predicted_class =
                        class_names[np.argmax(predictions[0])] confidence = round(100 * (np.max(predictions[0])), 2)
                        return predicted_class, confidence</p>
                    <p style="text-indent: 0pt;text-align: left;"><br /></p>
                    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 2pt;text-align: left;" />
                </li>
            </ol>
        </li>
        <li data-list-text="5.">
            <h4 style="padding-top: 2pt;padding-left: 174pt;text-indent: -12pt;text-align: left;">Potential Enhancements
            </h4>
        </li>
    </ol>
    <p style="text-indent: 0pt;text-align: left;"><br /></p>
    <ul id="l28">
        <li data-list-text="">
            <p class="s14" style="padding-left: 41pt;text-indent: -17pt;line-height: 13pt;text-align: left;">
                Hyperparameter Tuning<span class="s15">: Optimize learning rate, batch size, and architecture.</span>
            </p>
        </li>
        <li data-list-text="">
            <p class="s14" style="padding-left: 41pt;text-indent: -17pt;line-height: 13pt;text-align: left;">Early
                Stopping<span class="s15">: Stop training when validation accuracy plateaus.</span></p>
        </li>
        <li data-list-text="">
            <p class="s14" style="padding-left: 41pt;text-indent: -17pt;line-height: 13pt;text-align: left;">Transfer
                Learning<span class="s15">: Use a pre-trained model like ResNet for improved performance.</span></p>
        </li>
        <li data-list-text="">
            <p class="s14" style="padding-left: 41pt;text-indent: -17pt;line-height: 13pt;text-align: left;">
                Deployment<span class="s15">: Export the model to TensorFlow Lite or ONNX for deployment.</span></p>
            <h2 style="padding-top: 4pt;padding-left: 5pt;text-indent: 0pt;text-align: center;">CHAPTER-7</h2>
            <h2 style="padding-top: 9pt;padding-left: 84pt;text-indent: 0pt;line-height: 150%;text-align: center;">
                TIMELINE FOR EXECUTION OF PROJECT (GANTT CHART)</h2>
            <p style="text-indent: 0pt;text-align: left;"><br /></p>
            <p style="padding-left: 11pt;text-indent: 0pt;text-align: left;"><span>
                    <table border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td><img width="576" height="133"
                                    src="data:image/jpg;base64,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" />
                            </td>
                        </tr>
                        <tr>
                            <td><img width="576" height="132"
                                    src="data:image/jpg;base64,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" />
                            </td>
                        </tr>
                    </table>
                </span></p>
            <h2 style="padding-top: 4pt;padding-left: 182pt;text-indent: 0pt;line-height: 150%;text-align: center;">
                CHAPTER-8 OUTCOMES</h2>
            <p style="text-indent: 0pt;text-align: left;"><br /></p>
            <h4 style="padding-left: 8pt;text-indent: 0pt;text-align: left;">Dataset Preparation<span
                    class="s3">:</span></h4>
            <p style="text-indent: 0pt;text-align: left;"><br /></p>
            <ul id="l29">
                <li data-list-text="o">
                    <p class="s15" style="padding-left: 77pt;text-indent: -17pt;line-height: 13pt;text-align: left;">
                        Successfully loaded and preprocessed the dataset using TensorFlow&#39;s</p>
                    <p class="s16" style="padding-left: 77pt;text-indent: 0pt;line-height: 13pt;text-align: left;">
                        image_dataset_from_directory <span class="s15">function.</span></p>
                </li>
                <li data-list-text="o">
                    <p class="s15" style="padding-left: 77pt;text-indent: -17pt;line-height: 13pt;text-align: left;">
                        Split the dataset into training, validation, and test subsets with an 80-10-10 split.</p>
                </li>
                <li data-list-text="o">
                    <p class="s15" style="padding-left: 77pt;text-indent: -18pt;text-align: left;">Applied data
                        augmentation techniques such as random flipping and rotation to improve model generalization.
                    </p>
                </li>
            </ul>
        </li>
    </ul>
    <ol id="l30">
        <li data-list-text="2.">
            <h4 style="padding-left: 41pt;text-indent: -17pt;line-height: 14pt;text-align: left;">Visualization<span
                    class="s3">:</span></h4>
            <ul id="l31">
                <li data-list-text="o">
                    <p class="s15" style="padding-left: 77pt;text-indent: -17pt;line-height: 13pt;text-align: left;">
                        Displayed sample images from the dataset to verify the data loading process.</p>
                </li>
                <li data-list-text="o">
                    <p class="s15" style="padding-left: 77pt;text-indent: -17pt;line-height: 13pt;text-align: left;">
                        Illustrated augmented image samples to confirm the augmentation effects.</p>
                </li>
            </ul>
        </li>
        <li data-list-text="3.">
            <h4 style="padding-left: 41pt;text-indent: -17pt;line-height: 13pt;text-align: left;">Model Design<span
                    class="s3">:</span></h4>
            <ul id="l32">
                <li data-list-text="o">
                    <p class="s15" style="padding-left: 77pt;text-indent: -18pt;text-align: left;">Designed a deep CNN
                        model with six convolutional and pooling layers, followed by dense layers for classification.
                    </p>
                </li>
                <li data-list-text="o">
                    <p class="s15" style="padding-left: 77pt;text-indent: -17pt;line-height: 13pt;text-align: left;">
                        Incorporated a preprocessing layer for rescaling pixel values to [0, 1].</p>
                </li>
                <li data-list-text="o">
                    <p class="s15" style="padding-left: 77pt;text-indent: -18pt;text-align: left;">Achieved a scalable
                        architecture capable of handling images of size 256x256 with three channels.</p>
                </li>
            </ul>
        </li>
        <li data-list-text="4.">
            <h4 style="padding-left: 41pt;text-indent: -17pt;line-height: 14pt;text-align: left;">Model Training<span
                    class="s3">:</span></h4>
            <ul id="l33">
                <li data-list-text="o">
                    <p class="s15" style="padding-left: 77pt;text-indent: -17pt;line-height: 13pt;text-align: left;">
                        Trained the CNN model on the training set for 5 epochs using the Adam optimizer.</p>
                </li>
                <li data-list-text="o">
                    <p class="s15" style="padding-left: 77pt;text-indent: -17pt;line-height: 13pt;text-align: left;">
                        Monitored training and validation accuracy/loss throughout the process.</p>
                </li>
            </ul>
        </li>
        <li data-list-text="5.">
            <h4 style="padding-left: 41pt;text-indent: -17pt;line-height: 14pt;text-align: left;">Performance
                Evaluation<span class="s3">:</span></h4>
            <ul id="l34">
                <li data-list-text="o">
                    <p class="s15" style="padding-left: 77pt;text-indent: -17pt;line-height: 13pt;text-align: left;">
                        Evaluated the model on the test dataset to obtain accuracy and loss metrics.</p>
                </li>
                <li data-list-text="o">
                    <p class="s15" style="padding-left: 77pt;text-indent: -18pt;text-align: left;">Visualized
                        training/validation accuracy and loss trends, showing an increasing trend in accuracy and
                        decreasing loss.</p>
                </li>
            </ul>
        </li>
        <li data-list-text="6.">
            <h4 style="padding-left: 41pt;text-indent: -17pt;line-height: 14pt;text-align: left;">Prediction
                Capability<span class="s3">:</span></h4>
            <ul id="l35">
                <li data-list-text="o">
                    <p class="s15" style="padding-left: 77pt;text-indent: -18pt;text-align: left;">Developed a
                        prediction function that outputs the predicted class and confidence score for an input image.
                    </p>
                </li>
                <li data-list-text="o">
                    <p class="s15" style="padding-left: 77pt;text-indent: -18pt;text-align: left;">Demonstrated
                        prediction accuracy by comparing actual and predicted labels for test images.</p>
                </li>
            </ul>
        </li>
        <li data-list-text="7.">
            <h4 style="padding-left: 41pt;text-indent: -17pt;text-align: left;">Model Deployment<span
                    class="s3">:</span></h4>
            <ul id="l36">
                <li data-list-text="o">
                    <p class="s15" style="padding-left: 77pt;text-indent: -18pt;text-align: left;">Saved the trained
                        model to the filesystem with an automated versioning system to ensure reproducibility and track
                        updates.</p>
                </li>
            </ul>
        </li>
        <li data-list-text="8.">
            <h4 style="padding-left: 41pt;text-indent: -17pt;line-height: 14pt;text-align: left;">Key Metrics<span
                    class="s3">:</span></h4>
            <ul id="l37">
                <li data-list-text="o">
                    <p class="s14" style="padding-left: 77pt;text-indent: -18pt;text-align: left;">Training
                        Accuracy<span class="s15">: Observed an increasing trend during training, indicating model
                            learning.</span></p>
                </li>
                <li data-list-text="o">
                    <p class="s14" style="padding-left: 77pt;text-indent: -18pt;text-align: left;">Validation
                        Accuracy<span class="s15">: Comparable to training accuracy, suggesting minimal
                            overfitting.</span></p>
                </li>
                <li data-list-text="o">
                    <p class="s14" style="padding-left: 77pt;text-indent: -17pt;line-height: 13pt;text-align: left;">
                        Test Performance<span class="s15">: Evaluated on unseen test data to ensure
                            generalization.</span></p>
                </li>
            </ul>
        </li>
        <li data-list-text="9.">
            <h4 style="padding-left: 41pt;text-indent: -17pt;line-height: 13pt;text-align: left;">Insights Gained<span
                    class="s3">:</span></h4>
            <ul id="l38">
                <li data-list-text="o">
                    <p class="s15" style="padding-left: 77pt;text-indent: -17pt;line-height: 13pt;text-align: left;">
                        Data augmentation significantly improves the generalization of the model.</p>
                </li>
                <li data-list-text="o">
                    <p class="s15" style="padding-left: 77pt;text-indent: -18pt;text-align: left;">Visualizations of
                        training/validation metrics aid in diagnosing potential overfitting or underfitting issues.</p>
                </li>
            </ul>
        </li>
    </ol>
    <p style="text-indent: 0pt;text-align: left;"><br /></p>
    <p class="s13" style="padding-left: 5pt;text-indent: 0pt;text-align: left;">Results:</p>
    <h2 style="padding-top: 4pt;padding-left: 5pt;text-indent: 65pt;line-height: 150%;text-align: left;">CHAPTER-9
        RESULTS AND DISCUSSIONS</h2>
    <ol id="l39">
        <li data-list-text="1.">
            <h4 style="padding-top: 13pt;padding-left: 41pt;text-indent: -17pt;line-height: 14pt;text-align: left;">
                Model Performance<span class="s3">:</span></h4>
            <ul id="l40">
                <li data-list-text="o">
                    <p class="s14" style="padding-left: 77pt;text-indent: -18pt;text-align: left;">Training
                        Accuracy<span class="s15">: The CNN model achieved high training accuracy over the epochs,
                            indicating effective learning from the dataset.</span></p>
                </li>
                <li data-list-text="o">
                    <p class="s14" style="padding-left: 77pt;text-indent: -18pt;text-align: left;">Validation
                        Accuracy<span class="s15">: Validation accuracy remained close to training accuracy, suggesting
                            the model was generalizing well without overfitting.</span></p>
                </li>
                <li data-list-text="o">
                    <p class="s14" style="padding-left: 77pt;text-indent: -18pt;text-align: left;">Test Accuracy<span
                            class="s15">: Evaluation on the test dataset showed the model performed reliably on unseen
                            data, confirming its robustness.</span></p>
                </li>
            </ul>
        </li>
        <li data-list-text="2.">
            <h4 style="padding-left: 41pt;text-indent: -17pt;text-align: left;">Loss Trends<span class="s3">:</span>
            </h4>
            <ul id="l41">
                <li data-list-text="o">
                    <p class="s14" style="padding-left: 77pt;text-indent: -18pt;text-align: left;">Training Loss<span
                            class="s15">: The loss steadily decreased during training, demonstrating that the model
                            effectively minimized errors.</span></p>
                </li>
                <li data-list-text="o">
                    <p class="s14" style="padding-left: 77pt;text-indent: -18pt;text-align: left;">Validation Loss<span
                            class="s15">: Validation loss followed a similar decreasing trend, indicating alignment with
                            training performance.</span></p>
                </li>
            </ul>
        </li>
        <li data-list-text="3.">
            <h4 style="padding-left: 41pt;text-indent: -17pt;line-height: 14pt;text-align: left;">Prediction
                Outcomes<span class="s3">:</span></h4>
            <ul id="l42">
                <li data-list-text="o">
                    <p class="s15" style="padding-left: 77pt;text-indent: -18pt;text-align: left;">The model accurately
                        predicted the class labels for test images with high confidence scores.</p>
                </li>
                <li data-list-text="o">
                    <p class="s15" style="padding-left: 77pt;text-indent: -18pt;text-align: left;">Visualizations of
                        actual vs. predicted labels provided qualitative assurance of the model&#39;s correctness.</p>
                </li>
            </ul>
        </li>
        <li data-list-text="4.">
            <h4 style="padding-left: 41pt;text-indent: -17pt;line-height: 14pt;text-align: left;">Data Augmentation
                Effects<span class="s3">:</span></h4>
            <ul id="l43">
                <li data-list-text="o">
                    <p class="s15" style="padding-left: 77pt;text-indent: -18pt;text-align: left;">Techniques like
                        random flipping and rotation improved the model&#39;s ability to handle variations in the
                        dataset, contributing to better generalization.</p>
                </li>
            </ul>
        </li>
        <li data-list-text="5.">
            <h4 style="padding-left: 41pt;text-indent: -17pt;line-height: 14pt;text-align: left;">Model Deployment<span
                    class="s3">:</span></h4>
            <ul id="l44">
                <li data-list-text="o">
                    <p class="s15" style="padding-left: 77pt;text-indent: -18pt;text-align: left;">The trained model was
                        successfully saved with an automated versioning system, enabling easy reuse and iterative
                        improvements.</p>
                </li>
            </ul>
        </li>
    </ol>
    <p style="padding-top: 1pt;text-indent: 0pt;text-align: left;"><br /></p>
    <p class="s13" style="padding-left: 5pt;text-indent: 0pt;text-align: left;">Discussions:</p>
    <p style="text-indent: 0pt;text-align: left;"><br /></p>
    <ol id="l45">
        <li data-list-text="1.">
            <h4 style="padding-left: 41pt;text-indent: -17pt;text-align: left;">Effectiveness of CNN Architecture<span
                    class="s3">:</span></h4>
            <ul id="l46">
                <li data-list-text="o">
                    <p class="s15" style="padding-left: 77pt;text-indent: -18pt;text-align: left;">The chosen
                        architecture with six convolutional layers and dense layers effectively captured image features,
                        contributing to high classification accuracy.</p>
                </li>
                <li data-list-text="o">
                    <p class="s15" style="padding-left: 77pt;text-indent: -18pt;text-align: left;">The use of pooling
                        layers reduced the spatial dimensions, making computations more efficient.</p>
                </li>
            </ul>
        </li>
        <li data-list-text="2.">
            <h4 style="padding-left: 41pt;text-indent: -17pt;line-height: 14pt;text-align: left;">Impact of Data
                Preprocessing<span class="s3">:</span></h4>
            <ul id="l47">
                <li data-list-text="o">
                    <p class="s15" style="padding-left: 77pt;text-indent: -18pt;text-align: left;">Rescaling input
                        images to a [0, 1] range ensured consistent input values, improving model convergence.</p>
                </li>
                <li data-list-text="o">
                    <p class="s15" style="padding-left: 77pt;text-indent: -17pt;line-height: 13pt;text-align: left;">
                        Data augmentation provided robustness by simulating real-world variations.</p>
                </li>
            </ul>
        </li>
        <li data-list-text="3.">
            <h4 style="padding-left: 41pt;text-indent: -17pt;line-height: 13pt;text-align: left;">Challenges Faced<span
                    class="s3">:</span></h4>
            <ul id="l48">
                <li data-list-text="o">
                    <p class="s14" style="padding-left: 77pt;text-indent: -18pt;text-align: left;">Class Imbalance<span
                            class="s15">: If present in the dataset, it might have impacted model performance on
                            less-represented classes. Techniques like oversampling or class- weight adjustments could
                            mitigate this issue.</span></p>
                </li>
                <li data-list-text="o">
                    <p class="s14" style="padding-left: 77pt;text-indent: -18pt;text-align: justify;">Overfitting
                        Risk<span class="s15">: Although minimal, prolonged training or a larger model could lead to
                            overfitting. Regularization techniques such as dropout and early stopping might help.</span>
                    </p>
                </li>
            </ul>
        </li>
        <li data-list-text="4.">
            <h4 style="padding-left: 41pt;text-indent: -17pt;text-align: justify;">Model Interpretability<span
                    class="s3">:</span></h4>
            <ul id="l49">
                <li data-list-text="o">
                    <p class="s15" style="padding-left: 77pt;text-indent: -18pt;text-align: justify;">By visualizing
                        predicted and actual labels with confidence scores, the model&#39;s decision-making process was
                        made transparent, aiding in trust and verification.</p>
                </li>
            </ul>
        </li>
        <li data-list-text="5.">
            <h4 style="padding-left: 41pt;text-indent: -17pt;text-align: justify;">Future Improvements<span
                    class="s3">:</span></h4>
            <ul id="l50">
                <li data-list-text="o">
                    <p class="s14" style="padding-top: 4pt;padding-left: 77pt;text-indent: -18pt;text-align: left;">
                        Hyperparameter Tuning<span class="s15">: Adjusting learning rates, batch size, and optimizer
                            settings could further enhance performance.</span></p>
                </li>
                <li data-list-text="o">
                    <p class="s14" style="padding-left: 77pt;text-indent: -18pt;text-align: left;">Model Complexity<span
                            class="s15">: Experimenting with more advanced architectures like ResNet or MobileNet could
                            yield better accuracy for larger or more complex datasets.</span></p>
                </li>
                <li data-list-text="o">
                    <p class="s14" style="padding-left: 77pt;text-indent: -18pt;text-align: left;">Additional
                        Augmentation<span class="s15">: Including techniques like zoom, shear, or brightness adjustment
                            may improve robustness.</span></p>
                </li>
            </ul>
        </li>
        <li data-list-text="6.">
            <h4 style="padding-left: 41pt;text-indent: -17pt;line-height: 14pt;text-align: left;">Applications<span
                    class="s3">:</span></h4>
            <ul id="l51">
                <li data-list-text="o">
                    <p class="s15" style="padding-left: 77pt;text-indent: -18pt;text-align: left;">The model can be used
                        in agricultural settings to classify arecanut images effectively, aiding farmers or agricultural
                        experts in decision-making.</p>
                </li>
                <li data-list-text="o">
                    <p class="s15" style="padding-left: 77pt;text-indent: -18pt;text-align: left;">Scalability and
                        adaptability make this model suitable for similar classification tasks in other domains with
                        minimal adjustments.</p>
                </li>
            </ul>
        </li>
    </ol>
    <h2 style="padding-top: 4pt;padding-left: 134pt;text-indent: 0pt;line-height: 150%;text-align: center;">CHAPTER-10
        CONCLUSION</h2>
    <p class="s3" style="padding-top: 13pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">The developed
        Convolutional Neural Network (CNN) successfully classifies arecanut images into their respective categories with
        high accuracy. By leveraging TensorFlow&#39;s powerful libraries and incorporating effective preprocessing and
        data augmentation techniques, the model demonstrated strong performance and generalization capabilities. Key
        takeaways include:</p>
    <p style="text-indent: 0pt;text-align: left;"><br /></p>
    <ol id="l52">
        <li data-list-text="1.">
            <h4 style="padding-left: 41pt;text-indent: -18pt;text-align: left;">Effective Model Architecture<span
                    class="s3">: The multi-layer CNN architecture, comprising convolutional and pooling layers,
                    efficiently extracted relevant features from the image dataset.</span></h4>
        </li>
        <li data-list-text="2.">
            <h4 style="padding-left: 41pt;text-indent: -18pt;text-align: left;">Preprocessing and Augmentation<span
                    class="s3">: Image resizing, rescaling, and data augmentation techniques like random flipping and
                    rotation contributed to better robustness and enhanced generalization to unseen data.</span></h4>
        </li>
        <li data-list-text="3.">
            <h4 style="padding-left: 41pt;text-indent: -18pt;text-align: justify;">Performance Metrics<span class="s3">:
                    High training and validation accuracies, alongside low loss values, validated the model&#39;s
                    reliability and robustness. Visualization of predictions confirmed its correctness in real-world
                    scenarios.</span></h4>
        </li>
        <li data-list-text="4.">
            <h4 style="padding-left: 41pt;text-indent: -18pt;text-align: left;">Real-World Applicability<span
                    class="s3">: This solution has the potential to assist in agricultural and industrial processes,
                    automating image-based classification tasks with minimal human intervention.</span></h4>
        </li>
        <li data-list-text="5.">
            <h4 style="padding-left: 41pt;text-indent: -17pt;text-align: left;">Future Directions<span
                    class="s3">:</span></h4>
            <ul id="l53">
                <li data-list-text="o">
                    <p class="s15" style="padding-left: 77pt;text-indent: -18pt;text-align: left;">Enhancing the dataset
                        with more diverse samples could improve the model&#39;s versatility.</p>
                </li>
                <li data-list-text="o">
                    <p class="s15" style="padding-left: 77pt;text-indent: -18pt;text-align: left;">Experimenting with
                        advanced architectures (e.g., ResNet, EfficientNet) and hyperparameter tuning may yield further
                        improvements.</p>
                </li>
                <li data-list-text="o">
                    <p class="s15" style="padding-left: 77pt;text-indent: -18pt;text-align: left;">Integration into
                        mobile or edge devices could expand the practical utility of the system.</p>
                </li>
            </ul>
        </li>
    </ol>
    <h2 style="padding-top: 4pt;padding-left: 5pt;text-indent: 0pt;text-align: center;">REFERENCES</h2>
    <ol id="l54">
        <li data-list-text="1.">
            <h2 style="padding-top: 9pt;padding-left: 46pt;text-indent: -18pt;line-height: 150%;text-align: justify;">
                Dhanuja K.C., <i>Arecanut Disease Detection Using Machine Learning</i><a
                    href="https://www.researchgate.net/"
                    style=" color: black; font-family:&quot;Times New Roman&quot;, serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 16pt;"
                    target="_blank">, 2020. </a><span
                    style=" color: #00F; font-family:&quot;Times New Roman&quot;, serif; font-style: normal; font-weight: bold; text-decoration: underline; font-size: 16pt;">ResearchGate</span>.
            </h2>
        </li>
        <li data-list-text="2.">
            <h2 style="padding-left: 46pt;text-indent: -18pt;line-height: 150%;text-align: justify;">Manpreet Sandhu et
                al., <i>Image-Based Leaf Disease Detection Using CNN and Machine Learning</i>, International Journal of
                Recent Technology and Engineering, 2020.</h2>
        </li>
        <li data-list-text="3.">
            <h2 style="padding-left: 46pt;text-indent: -18pt;line-height: 150%;text-align: justify;">Ashish Nage et al.,
                <i>Plant Disease Identification Using CNN on Android Platform</i>, IEEE Conference Proceedings, 2019.
            </h2>
        </li>
        <li data-list-text="4.">
            <h2 style="padding-left: 46pt;text-indent: -18pt;line-height: 150%;text-align: justify;">Swathy Ann Sam et
                al., <i>A Comparative Study on Deep Learning and Traditional Approaches for Plant Disease Detection</i>,
                IEEE Access, 2020.</h2>
        </li>
        <li data-list-text="5.">
            <h2 style="padding-left: 46pt;text-indent: -18pt;line-height: 150%;text-align: justify;">LeCun, Y., Bengio,
                Y., &amp; Hinton, G., <i>Deep Learning</i>, Nature, 2015. DOI.</h2>
        </li>
        <li data-list-text="6.">
            <h2 style="padding-left: 46pt;text-indent: -18pt;line-height: 150%;text-align: justify;">Krizhevsky, A.,
                Sutskever, I., &amp; Hinton, G. E., <i>ImageNet Classification with Deep Convolutional Neural
                    Networks</i>, Advances in Neural Information Processing Systems, 2012.</h2>
        </li>
        <li data-list-text="7.">
            <h2 style="padding-left: 46pt;text-indent: -18pt;line-height: 150%;text-align: justify;">Howard, A. G., et
                al., <i>MobileNets: Efficient Convolutional Neural Networks for Mobile Vision Applications</i>, arXiv
                preprint arXiv:1704.04861, 2017.</h2>
        </li>
        <li data-list-text="8.">
            <h2 style="padding-left: 46pt;text-indent: -18pt;line-height: 150%;text-align: justify;">Chollet, F.,
                <i>Deep Learning with Python</i>, Manning Publications, 2018.</h2>
        </li>
        <li data-list-text="9.">
            <h2 style="padding-left: 46pt;text-indent: -18pt;line-height: 150%;text-align: justify;">Goodfellow, I.,
                Bengio, Y., &amp; Courville, A., <i>Deep Learning</i>, MIT Press, 2016.</h2>
        </li>
        <li data-list-text="10.">
            <h2 style="padding-left: 46pt;text-indent: -18pt;line-height: 150%;text-align: justify;">Bishop, C. M.,
                <i>Pattern Recognition and Machine Learning</i>, Springer, 2006.</h2>
        </li>
        <li data-list-text="11.">
            <h2 style="padding-top: 4pt;padding-left: 46pt;text-indent: -18pt;line-height: 150%;text-align: justify;">
                Jha, K., Doshi, A., Patel, P., &amp; Shah, M., <i>A Comprehensive Review on Automation in Agriculture
                    Using Artificial Intelligence</i>, Computers and Electronics in Agriculture, 2020. DOI.</h2>
        </li>
        <li data-list-text="12.">
            <h2 style="padding-left: 46pt;text-indent: -18pt;line-height: 150%;text-align: justify;">Liu, W., Wang, Z.,
                et al., <i>A Survey of Deep Neural Network Architectures and Their Applications</i>, Neurocomputing,
                2017.</h2>
        </li>
        <li data-list-text="13.">
            <h2 style="padding-left: 46pt;text-indent: -18pt;line-height: 150%;text-align: justify;">Simonyan, K., &amp;
                Zisserman, A., <i>Very Deep Convolutional Networks for Large-Scale Image Recognition</i>, arXiv preprint
                arXiv:1409.1556, 2014.</h2>
        </li>
        <li data-list-text="14.">
            <h2 style="padding-left: 46pt;text-indent: -18pt;line-height: 150%;text-align: justify;">Redmon, J., et al.,
                <i>You Only Look Once: Unified, Real- Time Object Detection</i>, IEEE Conference on Computer Vision and
                Pattern Recognition, 2016.</h2>
        </li>
        <li data-list-text="15.">
            <h2 style="padding-left: 46pt;text-indent: -18pt;line-height: 150%;text-align: justify;">Padmanaban, P., et
                al., <i>Sustainable Arecanut Farming Practices in India</i>, International Journal of Agricultural
                Sustainability, 2020.</h2>
        </li>
        <li data-list-text="16.">
            <h2 style="padding-left: 46pt;text-indent: -18pt;line-height: 150%;text-align: justify;">Kowsalya, K., et
                al., <i>Disease Identification in Crops Using Image Processing Techniques</i>, IJERT, 2019.</h2>
        </li>
        <li data-list-text="17.">
            <h2 style="padding-left: 46pt;text-indent: -18pt;line-height: 150%;text-align: justify;">Ramesh, P., et al.,
                <i>Application of Deep Learning in Agricultural Image Analysis</i>, Journal of Artificial Intelligence
                Research, 2018.</h2>
        </li>
        <li data-list-text="18.">
            <h2 style="padding-left: 46pt;text-indent: -18pt;line-height: 150%;text-align: justify;">Brownlee, J.,
                <i>Master Machine Learning Algorithms</i>, Machine Learning Mastery, 2016.</h2>
        </li>
        <li data-list-text="19.">
            <h2 style="padding-left: 46pt;text-indent: -18pt;line-height: 150%;text-align: justify;">Pathan, A. et al.,
                <i>Arecanut Plant Disease Identification Using KNN Algorithm</i>, IJCA, 2021.</h2>
        </li>
        <li data-list-text="20.">
            <h2 style="padding-top: 4pt;padding-left: 46pt;text-indent: -18pt;line-height: 150%;text-align: justify;">
                Kingma, D. P., &amp; Ba, J., <i>Adam: A Method for Stochastic Optimization</i>, arXiv preprint
                arXiv:1412.6980, 2014.</h2>
        </li>
        <li data-list-text="21.">
            <h2 style="padding-left: 46pt;text-indent: -18pt;line-height: 150%;text-align: justify;">He, K., Zhang, X.,
                Ren, S., &amp; Sun, J., <i>Deep Residual Learning for Image Recognition</i>, IEEE Conference on Computer
                Vision and Pattern Recognition, 2016.</h2>
        </li>
        <li data-list-text="22.">
            <h2 style="padding-left: 46pt;text-indent: -18pt;line-height: 150%;text-align: justify;">Huang, G., et al.,
                <i>Densely Connected Convolutional Networks</i>, IEEE Conference on Computer Vision and Pattern
                Recognition, 2017.</h2>
        </li>
        <li data-list-text="23.">
            <h2 style="padding-left: 46pt;text-indent: -18pt;line-height: 149%;text-align: justify;">Abadi, M., et al.,
                <i>TensorFlow: A System for Large-Scale Machine Learning</i><a href="https://www.tensorflow.org/"
                    style=" color: black; font-family:&quot;Times New Roman&quot;, serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 16pt;"
                    target="_blank">, OSDI, 2016. </a><span
                    style=" color: #00F; font-family:&quot;Times New Roman&quot;, serif; font-style: normal; font-weight: bold; text-decoration: underline; font-size: 16pt;">TensorFlow</span>.
            </h2>
        </li>
        <li data-list-text="24.">
            <h2 style="padding-left: 46pt;text-indent: -18pt;line-height: 150%;text-align: justify;">Raju, S.,
                <i>Arecanut Farming: Challenges and Prospects</i>, Indian Agricultural Research Journal, 2019.</h2>
        </li>
        <li data-list-text="25.">
            <h2 style="padding-left: 46pt;text-indent: -18pt;line-height: 150%;text-align: justify;">Smith, B., et al.,
                <i>Practical Applications of Machine Learning in Smart Agriculture</i>, Agricultural Systems Journal,
                2021.</h2>
        </li>
        <li data-list-text="26.">
            <h2 style="padding-left: 46pt;text-indent: -18pt;line-height: 150%;text-align: justify;">Silva, G., et al.,
                <i>Disease Detection in Crops Using Transfer Learning</i>, Computers and Electronics in Agriculture,
                2019.</h2>
        </li>
        <li data-list-text="27.">
            <h2 style="padding-left: 46pt;text-indent: -18pt;line-height: 150%;text-align: justify;">Tzeng, E., et al.,
                <i>Deep Domain Confusion: Maximizing for Domain Invariance</i>, arXiv preprint arXiv:1412.3474, 2014.
            </h2>
        </li>
        <li data-list-text="28.">
            <h2 style="padding-left: 46pt;text-indent: -18pt;line-height: 150%;text-align: justify;">Zhang, C., et al.,
                <i>A Survey on Machine Learning for Agriculture</i>, Artificial Intelligence Review, 2020.</h2>
        </li>
    </ol>
    <h2 style="padding-top: 4pt;padding-left: 173pt;text-indent: 0pt;line-height: 150%;text-align: center;">APPENDIX-A
        PSUEDOCODE</h2>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;"># importing the required modules
        import tensorflow as tf</p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">from tensorflow.keras import
        models, layers import matplotlib.pyplot as plt IMAGE_SIZE = 256</p>
    <p style="padding-left: 5pt;text-indent: 0pt;text-align: left;">BATCH_SIZE = 32</p>
    <p style="padding-top: 8pt;padding-left: 5pt;text-indent: 0pt;line-height: 149%;text-align: left;">dataset =
        tf.keras.preprocessing.image_dataset_from_directory( &quot;Arecanut_dataset/train/&quot;,</p>
    <p style="padding-left: 5pt;text-indent: 0pt;text-align: left;">shuffle=True,</p>
    <p style="padding-top: 9pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">batch_size = BATCH_SIZE</p>
    <p style="padding-top: 9pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">)</p>
    <p style="padding-top: 9pt;padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">class_names =
        dataset.class_names #folder name are our class name class_names</p>
    <p style="padding-left: 13pt;text-indent: -7pt;line-height: 150%;text-align: left;">for image_batch, label_batch in
        dataset.take(1): print(image_batch.shape) print(label_batch.numpy())</p>
    <p style="padding-top: 9pt;text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">len(dataset) dataset</p>
    <p style="padding-left: 21pt;text-indent: -15pt;line-height: 150%;text-align: left;">for image_batch, label_batch in
        dataset.take(1): print(image_batch[0]) # get the first image data in tensor</p>
    <p style="padding-top: 9pt;text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 5pt;text-indent: 0pt;text-align: left;">for image_batch, label_batch in dataset.take(1):</p>
    <p style="padding-top: 4pt;padding-left: 5pt;text-indent: 15pt;line-height: 150%;text-align: left;">
        print(image_batch[0].numpy())# convert tensor into numpy for image_batch, label_batch in dataset.take(1):</p>
    <p style="padding-left: 5pt;text-indent: 15pt;line-height: 300%;text-align: left;">print(image_batch[0].shape)#get
        the shape of the dataset CHANNELS = 3</p>
    <p style="padding-left: 5pt;text-indent: 0pt;text-align: left;">#visualization of data</p>
    <p style="padding-top: 9pt;padding-left: 21pt;text-indent: -15pt;line-height: 150%;text-align: left;">for
        image_batch, label_batch in dataset.take(1): plt.imshow(image_batch[0].numpy().astype(&quot;uint8&quot;))
        plt.axis(&quot;off&quot;) # hide x and y-axis</p>
    <p style="padding-top: 9pt;text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">#visualization of data
        plt.figure(figsize=(10,10))</p>
    <p style="padding-top: 9pt;text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 21pt;text-indent: -15pt;line-height: 150%;text-align: left;">for image_batch, label_batch in
        dataset.take(1): for i in range(12): # displaying the 12 images</p>
    <p style="padding-left: 37pt;text-indent: 0pt;line-height: 150%;text-align: left;">ax = plt.subplot(3,4,i+1)
        plt.imshow(image_batch[i].numpy().astype(&quot;uint8&quot;)) plt.title(class_names[label_batch[i]])# assigning
        the title by</p>
    <p style="padding-left: 37pt;text-indent: -31pt;line-height: 150%;text-align: left;">using index no. of the dataset
        plt.axis(&quot;off&quot;) # hide x and y-axis</p>
    <p style="padding-top: 9pt;text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">#lets try with 50 epochs EPOCHS =
        50</p>
    <p style="padding-left: 5pt;text-indent: 0pt;text-align: left;">train_size = 0.8</p>
    <p style="padding-top: 4pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">len(dataset) * train_size</p>
    <p style="text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">def
        get_dataset_partitions_tf(ds,train_split = 0.8, val_split = 0.1, test_split = 0.1,shuffle = True, shuffle_size =
        10000):</p>
    <p style="padding-left: 21pt;text-indent: 0pt;line-height: 150%;text-align: left;">ds_size = len(ds) if shuffle:</p>
    <p style="padding-left: 5pt;text-indent: 31pt;line-height: 150%;text-align: left;">ds = ds.shuffle(shuffle_size,
        seed = 12) #seed is because we should not get same images, seed may be any number</p>
    <p style="padding-left: 37pt;text-indent: 0pt;line-height: 149%;text-align: left;">train_size = int(train_split *
        ds_size) #convert into integer val_size = int(val_split * ds_size)</p>
    <p style="padding-left: 37pt;text-indent: 0pt;text-align: left;">train_ds = ds.take(train_size)</p>
    <p style="padding-top: 9pt;padding-left: 5pt;text-indent: 31pt;line-height: 150%;text-align: left;">val_ds =
        ds.skip(train_size).take(val_size) # first skip and then take the dataset</p>
    <p style="padding-left: 37pt;text-indent: 0pt;line-height: 150%;text-align: left;">test_ds =
        ds.skip(train_size).take(val_size) return train_ds, val_ds, test_ds</p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">train_ds, val_ds, test_ds =
        get_dataset_partitions_tf(dataset) train_ds = train_ds.cache().shuffle(1000).prefetch(buffer_size =
        tf.data.AUTOTUNE) # first it will read the image from the disk and stores in the memory</p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">val_ds =
        val_ds.cache().shuffle(1000).prefetch(buffer_size = tf.data.AUTOTUNE) # first it will read the image from the
        disk and stores in the memory</p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">test_ds =
        test_ds.cache().shuffle(1000).prefetch(buffer_size = tf.data.AUTOTUNE) # first it will read the image from the
        disk and stores in the memory</p>
    <p style="padding-top: 4pt;padding-left: 21pt;text-indent: -15pt;line-height: 150%;text-align: left;">
        resizing_and_rescaling = tf.keras.Sequential([ layers.experimental.preprocessing.Rescaling(1.0/255)</p>
    <p style="padding-left: 5pt;text-indent: 0pt;text-align: left;">])</p>
    <p style="padding-top: 9pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">data_augumentation =
        tf.keras.Sequential([</p>
    <p style="text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">
        layers.experimental.preprocessing.RandomFlip(&quot;horizontal_and_vert ical&quot;),</p>
    <p style="padding-left: 21pt;text-indent: 0pt;text-align: left;">
        layers.experimental.preprocessing.RandomRotation(0.2),</p>
    <p style="padding-top: 9pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">])</p>
    <p style="padding-top: 9pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">from tensorflow.keras.layers import
        Conv2D, MaxPooling2D</p>
    <p style="text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 5pt;text-indent: 0pt;text-align: left;">#Model Building CNN</p>
    <p style="padding-top: 9pt;padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">input_shape =
        (BATCH_SIZE, IMAGE_SIZE, IMAGE_SIZE, CHANNELS)</p>
    <p style="padding-left: 5pt;text-indent: 0pt;text-align: left;">n_classes = 3 # our no. of classes(folders) are
        three</p>
    <p style="padding-top: 18pt;text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 5pt;text-indent: 0pt;text-align: left;">model = models.Sequential([</p>
    <p style="padding-top: 9pt;padding-left: 21pt;text-indent: 0pt;line-height: 150%;text-align: left;">
        resizing_and_rescaling, # first resizing_and_rescaling layers.Conv2D(32, kernel_size = (3,3),
        activation=&#39;relu&#39;,</p>
    <p style="padding-left: 21pt;text-indent: -15pt;line-height: 150%;text-align: left;">input_shape=input_shape),
        layers.MaxPooling2D((2, 2)),</p>
    <p style="padding-left: 21pt;text-indent: 0pt;line-height: 150%;text-align: left;">layers.Conv2D(64, kernel_size =
        (3,3), activation=&#39;relu&#39;), layers.MaxPooling2D((2, 2)),</p>
    <p style="padding-left: 21pt;text-indent: 0pt;line-height: 150%;text-align: left;">layers.Conv2D(64, kernel_size =
        (3,3), activation=&#39;relu&#39;), layers.MaxPooling2D((2, 2)),</p>
    <p style="padding-top: 4pt;padding-left: 21pt;text-indent: 0pt;text-align: left;">layers.Conv2D(64, (3, 3),
        activation=&#39;relu&#39;),</p>
    <p style="padding-top: 9pt;padding-left: 21pt;text-indent: 0pt;text-align: left;">layers.MaxPooling2D((2, 2)),</p>
    <p style="padding-top: 9pt;padding-left: 21pt;text-indent: 0pt;text-align: left;">layers.Conv2D(64, (3, 3),
        activation=&#39;relu&#39;),</p>
    <p style="padding-top: 9pt;padding-left: 21pt;text-indent: 0pt;text-align: left;">layers.MaxPooling2D((2, 2)),</p>
    <p style="padding-top: 9pt;padding-left: 21pt;text-indent: 0pt;text-align: left;">layers.Conv2D(64, (3, 3),
        activation=&#39;relu&#39;),</p>
    <p style="padding-top: 9pt;padding-left: 21pt;text-indent: 0pt;line-height: 150%;text-align: left;">
        layers.MaxPooling2D((2, 2)), layers.Flatten(),</p>
    <p style="padding-left: 21pt;text-indent: 0pt;line-height: 150%;text-align: left;">layers.Dense(64,
        activation=&#39;relu&#39;), layers.Dense(n_classes, activation=&#39;softmax&#39;),</p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 18pt;text-align: left;">])</p>
    <p style="text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">
        model.build(input_shape=input_shape) model.summary()</p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">from keras import utils as
        np_utils model.compile(</p>
    <p style="padding-left: 21pt;text-indent: 0pt;text-align: left;">optimizer=&#39;adam&#39;,</p>
    <p style="text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">
        loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=Fals e),</p>
    <p style="padding-left: 22pt;text-indent: 0pt;text-align: left;">metrics=[&#39;accuracy&#39;]</p>
    <p style="padding-top: 9pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">)</p>
    <p style="padding-top: 9pt;padding-left: 21pt;text-indent: -15pt;line-height: 150%;text-align: left;">history =
        model.fit( train_ds,</p>
    <p style="padding-left: 21pt;text-indent: 0pt;line-height: 150%;text-align: left;">batch_size=BATCH_SIZE,
        validation_data=val_ds,</p>
    <p style="padding-top: 4pt;padding-left: 21pt;text-indent: 0pt;line-height: 150%;text-align: left;">verbose=1,
        epochs=5,</p>
    <p style="padding-left: 5pt;text-indent: 0pt;text-align: left;">)</p>
    <p style="text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">score = model.evaluate(test_ds)
        score</p>
    <p style="padding-left: 5pt;text-indent: 0pt;text-align: left;">history</p>
    <p style="padding-top: 9pt;padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">history.params #
        parameters history.history.keys() history.history[&#39;accuracy&#39;] len(history.history[&#39;accuracy&#39;])
    </p>
    <p style="padding-top: 9pt;text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;"># visualize the train and accuracy
        acc = history.history[&#39;accuracy&#39;]</p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">val_acc =
        history.history[&#39;val_accuracy&#39;] loss = history.history[&#39;loss&#39;]</p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">val_loss =
        history.history[&#39;val_loss&#39;] plt.figure(figsize=(8, 8))</p>
    <p style="padding-left: 5pt;text-indent: 0pt;text-align: left;">plt.subplot(1, 2, 1)</p>
    <p style="padding-top: 9pt;padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">
        plt.plot(range(len(acc)), acc, label=&#39;Training Accuracy&#39;) plt.plot(range(len(val_acc)), val_acc,
        label=&#39;Validation Accuracy&#39;) plt.legend(loc=&#39;lower right&#39;)</p>
    <p style="padding-left: 5pt;text-indent: 0pt;text-align: left;">plt.title(&#39;Training and Validation
        Accuracy&#39;)</p>
    <p style="padding-top: 18pt;text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 5pt;text-indent: 0pt;text-align: left;">#graphs shows the increase in accuracy</p>
    <p style="padding-top: 4pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">plt.subplot(1, 2, 2)</p>
    <p style="padding-top: 9pt;padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">
        plt.plot(range(len(loss)), loss, label=&#39;Training Loss&#39;) plt.plot(range(len(val_loss)), val_loss,
        label=&#39;Validation Loss&#39;) plt.legend(loc=&#39;upper right&#39;)</p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">plt.title(&#39;Training and
        Validation Loss&#39;) plt.show()</p>
    <p style="padding-top: 9pt;text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;"># graphs shows the loss import
        numpy as np</p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 18pt;text-align: left;">for images_batch, labels_batch in
        test_ds.take(1):</p>
    <p style="text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 21pt;text-indent: 0pt;line-height: 150%;text-align: left;">first_image =
        images_batch[0].numpy().astype(&#39;uint8&#39;) first_label = labels_batch[0].numpy()</p>
    <p style="padding-top: 9pt;text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 21pt;text-indent: 0pt;line-height: 150%;text-align: left;">print(&quot;first image to
        predict&quot;) plt.imshow(first_image)</p>
    <p style="padding-left: 21pt;text-indent: 0pt;text-align: left;">print(&quot;actual
        label:&quot;,class_names[first_label])</p>
    <p style="text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 21pt;text-indent: 0pt;line-height: 150%;text-align: left;">batch_prediction =
        model.predict(images_batch) print(&quot;predicted</p>
    <p style="padding-left: 5pt;text-indent: 0pt;text-align: left;">
        label:&quot;,class_names[np.argmax(batch_prediction[0])])</p>
    <p style="text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;"># function which takes model and
        image as input and tells predict class and confidence</p>
    <p style="padding-left: 5pt;text-indent: 0pt;text-align: left;">def predict(model, img):</p>
    <p style="padding-top: 4pt;padding-left: 5pt;text-indent: 15pt;line-height: 150%;text-align: left;">img_array =
        tf.keras.preprocessing.image.img_to_array(images[i].numpy())</p>
    <p style="padding-left: 21pt;text-indent: 0pt;line-height: 300%;text-align: left;">img_array =
        tf.expand_dims(img_array, 0) predictions = model.predict(img_array)</p>
    <p style="padding-left: 21pt;text-indent: 0pt;line-height: 150%;text-align: left;">predicted_class =
        class_names[np.argmax(predictions[0])] confidence = round(100 * (np.max(predictions[0])), 2) return
        predicted_class, confidence</p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 18pt;text-align: left;">plt.figure(figsize=(15, 15))</p>
    <p style="padding-top: 9pt;padding-left: 21pt;text-indent: -15pt;line-height: 150%;text-align: left;">for images,
        labels in test_ds.take(1): for i in range(9):</p>
    <p style="padding-left: 37pt;text-indent: 0pt;line-height: 150%;text-align: left;">ax = plt.subplot(3, 3, i + 1)
        plt.imshow(images[i].numpy().astype(&quot;uint8&quot;))</p>
    <p style="padding-top: 9pt;text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 5pt;text-indent: 31pt;line-height: 150%;text-align: left;">predicted_class, confidence =
        predict(model, images[i].numpy())</p>
    <p style="padding-left: 37pt;text-indent: 0pt;text-align: left;">actual_class = class_names[labels[i]]</p>
    <p style="text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 37pt;text-indent: 0pt;text-align: left;">plt.title(f&quot;Actual: {actual_class},\n
        Predicted:</p>
    <p style="padding-top: 9pt;padding-left: 37pt;text-indent: -31pt;line-height: 300%;text-align: left;">
        {predicted_class}.\n Confidence: {confidence}%&quot;) plt.axis(&quot;off&quot;)</p>
    <p style="padding-left: 5pt;text-indent: 0pt;text-align: left;"># save the model</p>
    <p style="padding-top: 4pt;padding-left: 5pt;text-indent: 0pt;text-align: left;">import os</p>
    <p style="text-indent: 0pt;text-align: left;"><br /></p>
    <p style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;"># automatically create the version
        of the model model_version=max([int(i) for i in os.listdir(r&quot;C:\Users\Admin\Desktop&quot;) if i.isdigit()]
        + [0])+1 model.save(f&quot;../models/{model_version}&quot;)</p>
    <p style="text-indent: 0pt;text-align: left;"><br /></p>
    <h2 style="padding-left: 170pt;text-indent: 0pt;line-height: 150%;text-align: center;">APPENDIX-B SCREENSHOTS</h2>
    <h2 style="padding-top: 4pt;padding-left: 175pt;text-indent: 0pt;line-height: 150%;text-align: center;">APPENDIX-C
        ENCLOSURES</h2>
    <p style="padding-top: 9pt;text-indent: 0pt;text-align: left;"><br /></p>
    <ol id="l55">
        <li data-list-text="1.">
            <h2 style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">Journal
                publication/Conference Paper Presented Certificates of all students.</h2>
        </li>
        <li data-list-text="2.">
            <h2 style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">Include certificate(s) of
                any Achievement/Award won in any project-related event.</h2>
        </li>
        <li data-list-text="3.">
            <h2 style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">Similarity Index /
                Plagiarism Check report clearly showing the Percentage (%). No need for a page-wise explanation.</h2>
        </li>
        <li data-list-text="4.">
            <h2 style="padding-left: 5pt;text-indent: 0pt;line-height: 150%;text-align: left;">Details of mapping the
                project with the Sustainable Development Goals (SDGs).</h2>
        </li>
    </ol>
</body>

</html>

  `;

  return (
    <div>
      <Navbar />
      <div className="paper-content">
        <HtmlRenderer html={htmlContent} />
      </div>
      <Footer />
    </div>
  );
};

export default Report;

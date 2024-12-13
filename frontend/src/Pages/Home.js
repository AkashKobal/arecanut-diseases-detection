// import React, { useState } from "react";
// import "../assets/vendor/bootstrap/css/bootstrap.min.css";
// import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
// import "../assets/vendor/aos/aos.css";
// import "../assets/vendor/glightbox/css/glightbox.min.css";
// import "../assets/vendor/swiper/swiper-bundle.min.css";
// import "../assets/css/main.css";
// import "../assets/img/favicon.png"; // For favicon
// import avatar1 from "../assets/img/avatar1.webp";
// import avatar2 from "../assets/img/avatar2.webp";
// import avatar3 from "../assets/img/avatar3.webp";
// import avatar4 from "../assets/img/avatar4.webp";
// import avatar5 from "../assets/img/avatar5.webp";
// import illustration_1 from "../assets/img/illustration_1.png";
// import features_illustration_1 from "../assets/img/features_illustration_1.svg";
// import features_illustration_2 from "../assets/img/features_illustration_2.svg";
// import features_illustration_3 from "../assets/img/features_illustration_3.svg";
// import { makeStyles, withStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
// import Container from "@material-ui/core/Container";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import { Paper, CardActionArea, CardMedia, Grid, TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Button, CircularProgress } from "@material-ui/core";
// // import cblogo from "./cblogo.PNG";
// // import image from "https://www.pepperhub.in/wp-content/uploads/2022/08/Kasargodan-Arecanut-Plants-Pack-of-10.webp";
// import { DropzoneArea } from 'material-ui-dropzone';
// import { common } from '@material-ui/core/colors';
// import Clear from '@material-ui/icons/Clear';
// import axios from 'axios';

// import about5 from "../assets/img/about5.svg";
// import AOS from "aos";
// import "swiper/swiper-bundle.css";
// import Swiper from 'swiper';
// import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../Components/Navbar";


// function Home() {


//     useEffect(() => {


//         function toggleScrolled() {
//             const selectBody = document.querySelector("body");
//             const selectHeader = document.querySelector("#header");
//             if (
//                 !selectHeader ||
//                 (!selectHeader.classList.contains("scroll-up-sticky") &&
//                     !selectHeader.classList.contains("sticky-top") &&
//                     !selectHeader.classList.contains("fixed-top"))
//             )
//                 return;
//             window.scrollY > 100
//                 ? selectBody.classList.add("scrolled")
//                 : selectBody.classList.remove("scrolled");
//         }

//         document.addEventListener("scroll", toggleScrolled);
//         window.addEventListener("load", toggleScrolled);

//         /**
//          * Mobile nav toggle
//          */
//         const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

//         function mobileNavToogle() {
//             document.querySelector("body").classList.toggle("mobile-nav-active");
//             mobileNavToggleBtn.classList.toggle("bi-list");
//             mobileNavToggleBtn.classList.toggle("bi-x");
//         }
//         if (mobileNavToggleBtn) {
//             mobileNavToggleBtn.addEventListener("click", mobileNavToogle);
//         }

//         /**
//          * Hide mobile nav on same-page/hash links
//          */
//         document.querySelectorAll("#navmenu a").forEach((navmenu) => {
//             navmenu.addEventListener("click", () => {
//                 if (document.querySelector(".mobile-nav-active")) {
//                     mobileNavToogle();
//                 }
//             });
//         });

//         /**
//          * Toggle mobile nav dropdowns
//          */
//         document
//             .querySelectorAll(".navmenu .toggle-dropdown")
//             .forEach((navmenu) => {
//                 navmenu.addEventListener("click", function (e) {
//                     e.preventDefault();
//                     this.parentNode.classList.toggle("active");
//                     this.parentNode.nextElementSibling.classList.toggle(
//                         "dropdown-active"
//                     );
//                     e.stopImmediatePropagation();
//                 });
//             });

//         /**
//          * Scroll top button
//          */
//         let scrollTop = document.querySelector(".scroll-top");

//         function toggleScrollTop() {
//             if (scrollTop) {
//                 window.scrollY > 100
//                     ? scrollTop.classList.add("active")
//                     : scrollTop.classList.remove("active");
//             }
//         }
//         scrollTop.addEventListener("click", (e) => {
//             e.preventDefault();
//             window.scrollTo({
//                 top: 0,
//                 behavior: "smooth",
//             });
//         });

//         window.addEventListener("load", toggleScrollTop);
//         document.addEventListener("scroll", toggleScrollTop);

//         /**
//          * Animation on scroll function and init
//          */
//         function aosInit() {
//             AOS.init({
//                 duration: 600,
//                 easing: "ease-in-out",
//                 once: true,
//                 mirror: false,
//             });
//         }
//         window.addEventListener("load", aosInit);

//         /**
//          * Frequently Asked Questions Toggle
//          */
//         document
//             .querySelectorAll(".faq-item h3, .faq-item .faq-toggle")
//             .forEach((faqItem) => {
//                 faqItem.addEventListener("click", () => {
//                     faqItem.parentNode.classList.toggle("faq-active");
//                 });
//             });

//         /**
//          * Correct scrolling position upon page load for URLs containing hash links.
//          */
//         window.addEventListener("load", function (e) {
//             if (window.location.hash) {
//                 if (document.querySelector(window.location.hash)) {
//                     setTimeout(() => {
//                         let section = document.querySelector(window.location.hash);
//                         let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
//                         window.scrollTo({
//                             top: section.offsetTop - parseInt(scrollMarginTop),
//                             behavior: "smooth",
//                         });
//                     }, 100);
//                 }
//             }
//         });

//         /**
//          * Navmenu Scrollspy
//          */
//         let navmenulinks = document.querySelectorAll(".navmenu a");

//         function navmenuScrollspy() {
//             navmenulinks.forEach((navmenulink) => {
//                 if (!navmenulink.hash) return;
//                 let section = document.querySelector(navmenulink.hash);
//                 if (!section) return;
//                 let position = window.scrollY + 200;
//                 if (
//                     position >= section.offsetTop &&
//                     position <= section.offsetTop + section.offsetHeight
//                 ) {
//                     document
//                         .querySelectorAll(".navmenu a.active")
//                         .forEach((link) => link.classList.remove("active"));
//                     navmenulink.classList.add("active");
//                 } else {
//                     navmenulink.classList.remove("active");
//                 }
//             });
//         }
//         window.addEventListener("load", navmenuScrollspy);
//         document.addEventListener("scroll", navmenuScrollspy);

//         const initSwiper = () => {
//             document.querySelectorAll(".init-swiper").forEach((swiperElement) => {
//                 const configElement = swiperElement.querySelector(".swiper-config");
//                 if (configElement) {
//                     const config = JSON.parse(configElement.innerHTML.trim());
//                     new Swiper(swiperElement, config);
//                 } else {
//                     console.error("Swiper configuration not found.");
//                 }
//             });
//         }
//         initSwiper();

//     }, []);

//     const ColorButton = withStyles((theme) => ({
//         root: {
//             color: theme.palette.getContrastText(common.white),
//             backgroundColor: common.white,
//             '&:hover': {
//                 backgroundColor: '#ffffff7a',
//             },
//         },
//     }))(Button);
//     // const axios = require("axios").default;

    
//     const ColorButton = withStyles((theme) => ({
//         root: {
//           color: theme.palette.getContrastText(common.white),
//           backgroundColor: common.white,
//           '&:hover': {
//             backgroundColor: '#ffffff7a',
//           },
//         },
//       }))(Button);
//       // const axios = require("axios").default;
      
//       const useStyles = makeStyles((theme) => ({
//         grow: {
//           flexGrow: 1,
//         },
//         clearButton: {
//           width: "-webkit-fill-available",
//           borderRadius: "15px",
//           padding: "15px 22px",
//           color: "#000000a6",
//           fontSize: "20px",
//           fontWeight: 900,
//         },
//         root: {
//           maxWidth: 345,
//           flexGrow: 1,
//         },
//         media: {
//           height: 400,
//         },
//         paper: {
//           padding: theme.spacing(2),
//           margin: 'auto',
//           maxWidth: 500,
//         },
//         gridContainer: {
//           justifyContent: "center",
//           padding: "4em 1em 0 1em",
//         },
//         mainContainer: {
//           backgroundImage: `url(${image})`,
//           backgroundRepeat: 'no-repeat',
//           backgroundPosition: 'center',
//           backgroundSize: 'cover',
//           height: "93vh",
//           marginTop: "8px",
//           // eslint-disable-next-line no-restricted-globals
      
//         },
//         imageCard: {
//           margin: "auto",
//           maxWidth: 400,
//           height: 500,
//           backgroundColor: 'transparent',
//           boxShadow: '0px 9px 70px 0px rgb(0 0 0 / 30%) !important',
//           borderRadius: '15px',
//           zIndex: -1,
//         },
//         imageCardEmpty: {
//           height: 'auto',
//         },
//         noImage: {
//           margin: "auto",
//           width: 400,
//           height: "400 !important",
//         },
//         input: {
//           display: 'none',
//         },
//         uploadIcon: {
//           background: 'white',
//         },
//         tableContainer: {
//           backgroundColor: 'transparent !important',
//           boxShadow: 'none !important',
//         },
//         table: {
//           backgroundColor: 'transparent !important',
//         },
//         tableHead: {
//           backgroundColor: 'transparent !important',
//         },
//         tableRow: {
//           backgroundColor: 'transparent !important',
//         },
//         tableCell: {
//           fontSize: '22px',
//           backgroundColor: 'transparent !important',
//           borderColor: 'transparent !important',
//           color: '#000000a6 !important',
//           fontWeight: 'bolder',
//           padding: '1px 24px 1px 16px',
//         },
//         tableCell1: {
//           fontSize: '14px',
//           backgroundColor: 'transparent !important',
//           borderColor: 'transparent !important',
//           color: '#000000a6 !important',
//           fontWeight: 'bolder',
//           padding: '1px 24px 1px 16px',
//         },
//         tableBody: {
//           backgroundColor: 'transparent !important',
//         },
//         text: {
//           color: 'white !important',
//           textAlign: 'center',
//         },
//         buttonGrid: {
//           maxWidth: "416px",
//           width: "100%",
//         },
//         detail: {
//           backgroundColor: 'white',
//           display: 'flex',
//           justifyContent: 'center',
//           flexDirection: 'column',
//           alignItems: 'center',
//         },
//         appbar: {
//           background: '#714a2be6',
//           boxShadow: 'none',
//           color: 'white',
//           fontWeight: "bolder"
//         },
//         loader: {
//           color: '#be6a77 !important',
//         }
//       }));
//     }
//        const ImageUpload = () => {
//         const classes = useStyles();
//         const [selectedFile, setSelectedFile] = useState();
//         const [preview, setPreview] = useState();
//         const [data, setData] = useState();
//         const [image, setImage] = useState(false);
//         const [isLoading, setIsloading] = useState(false);
//         let confidence = 0;
      
//         const sendFile = async () => {
//           if (image) {
//             let formData = new FormData();
//             formData.append("file", selectedFile);
//             let res = await axios({
//               method: "post",
//               url: 'http://localhost:8080/predict',
//               data: formData,
//             });
//             if (res.status === 200) {
//               setData(res.data);
//             }
      
//             setIsloading(false);
//           }
      
      
//         }
      
//         const clearData = () => {
//           setData(null);
//           setImage(false);
//           setSelectedFile(null);
//           setPreview(null);
//         };
      
//         useEffect(() => {
//           if (!selectedFile) {
//             setPreview(undefined);
//             return;
//           }
//           const objectUrl = URL.createObjectURL(selectedFile);
//           setPreview(objectUrl);
//         }, [selectedFile]);
      
//         useEffect(() => {
//           if (!preview) {
//             return;
//           }
//           setIsloading(true);
//           sendFile();
//         }, [preview]);
      
//         const onSelectFile = (files) => {
//           if (!files || files.length === 0) {
//             setSelectedFile(undefined);
//             setImage(false);
//             setData(undefined);
//             return;
//           }
//           setSelectedFile(files[0]);
//           setData(undefined);
//           setImage(true);
//         };
      
//         if (data) {
//           confidence = (parseFloat(data.confidence) * 100).toFixed(2);
//         }
    
      


//     return (
//         <body class="index-page">
//             <Navbar />
//             <Card className={`${classes.imageCard} ${!image ? classes.imageCardEmpty : ''}`}>
//               {image && <CardActionArea>
//                 <CardMedia
//                   className={classes.media}
//                   image={preview}
//                   component="image"
//                   title="Contemplative Reptile"
//                 />
//               </CardActionArea>
//               }
//               {!image && <CardContent className={classes.content}>
//                 <DropzoneArea
//                   acceptedFiles={['image/*']}
//                   dropzoneText={"Drag and drop an image of a potato plant leaf to process"}
//                   onChange={onSelectFile}
//                 />
//               </CardContent>}
//               {data && <CardContent className={classes.detail}>
//                 <TableContainer component={Paper} className={classes.tableContainer}>
//                   <Table className={classes.table} size="small" aria-label="simple table">
//                     <TableHead className={classes.tableHead}>
//                       <TableRow className={classes.tableRow}>
//                         <TableCell className={classes.tableCell1}>Label:</TableCell>
//                         <TableCell align="right" className={classes.tableCell1}>Confidence:</TableCell>
//                       </TableRow>
//                     </TableHead>
//                     <TableBody className={classes.tableBody}>
//                       <TableRow className={classes.tableRow}>
//                         <TableCell component="th" scope="row" className={classes.tableCell}>
//                           {data.class}
//                         </TableCell>
//                         <TableCell align="right" className={classes.tableCell}>{confidence}%</TableCell>
//                       </TableRow>
//                     </TableBody>
//                   </Table>
//                 </TableContainer>
//               </CardContent>}
//               {isLoading && <CardContent className={classes.detail}>
//                 <CircularProgress color="secondary" className={classes.loader} />
//                 <Typography className={classes.title} variant="h6" noWrap>
//                   Processing
//                 </Typography>
//               </CardContent>}
//             </Card>
//             <main className="main">
//                 <section id="hero" className="hero section">
//                     <div className="container" data-aos="fade-up" data-aos-delay={100}>
//                         <div className="row align-items-center">
//                             <div className="col-lg-6">
//                                 <div
//                                     className="hero-content"
//                                     data-aos="fade-up"
//                                     data-aos-delay={200}
//                                 >
//                                     <h1 className="mb-4">
//                                         Arecanut Disease <br />
//                                         Detection <br />
//                                     </h1>
//                                     <p className="mb-4 mb-md-5">
//                                         Empowering farmers and researchers with cutting-edge technology to detect
//                                         diseases in arecanut crops. Experience precision and efficiency with our
//                                         innovative platform.
//                                     </p>
//                                     <div className="hero-buttons">
//                                         <Link to="/predict"><a href="/predict" className="btn btn-primary me-0 me-sm-2 mx-1">Predict</a></Link>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-lg-6">
//                                 <div
//                                     className="hero-image"
//                                     data-aos="zoom-out"
//                                     data-aos-delay={300}
//                                 >
                                  
//                                     <img
//                                         src={illustration_1}
//                                         alt="Hero icon"
//                                         className="img-fluid"
//                                     />
//                                     <div className="customers-badge">
//                                         <div className="customer-avatars">
//                                             <img src={avatar1} alt="Farmer 1" className="avatar" />
//                                             <img src={avatar2} alt="Farmer 2" className="avatar" />
//                                             <img src={avatar3} alt="Farmer 3" className="avatar" />
//                                             <img src={avatar4} alt="Farmer 4" className="avatar" />
//                                             <img src={avatar5} alt="Farmer 5" className="avatar" />
//                                             <span className="avatar more">50+</span>
//                                         </div>
//                                         <p className="mb-0 mt-2">
//                                             Over 500+ satisfied users rely on our platform for accurate disease detection
//                                             and timely interventions.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <style
//                             dangerouslySetInnerHTML={{
//                                 __html:
//                                     "\n          .recent-publications-p {\n            padding-left: 2rem;\n          }\n\n          .recent-publications-h2 {\n            padding-left: 2rem;\n          }\n        ",
//                             }}
//                         />
//                         <div
//                             className="row stats-row gy-4 "
//                             data-aos="fade-up"
//                             data-aos-delay={500}
//                         >
//                             <h2 className="recent-publications-h2 mb-2">Recent Publications</h2>
//                             <div className="recent-publications-p">
//                                 Latest advancements and findings in arecanut disease detection.
//                             </div>
//                         </div>

//                         <div
//                             className="row stats-row gy-4 mt-5"
//                             data-aos="fade-up"
//                             data-aos-delay={500}
//                         >
//                             <div className="col-lg-4 col-md-6">
//                                 <div className="stat-item">
//                                     <div className="stat-icon">
//                                         <i className="bi bi-collection" />
//                                     </div>
//                                     <div className="stat-content">
//                                         <h4>Comprehensive Dataset</h4>
//                                         <p>
//                                             <strong>1000+ Images, 50+ Disease Types:</strong> Access an extensive dataset for accurate arecanut disease detection.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-lg-4 col-md-6">
//                                 <div className="stat-item">
//                                     <div className="stat-icon">
//                                         <i className="bi bi-rocket-takeoff" />
//                                     </div>
//                                     <div className="stat-content">
//                                         <h4>Fast Diagnosis</h4>
//                                         <p>
//                                             <strong>Real-Time Analysis:</strong> Detect diseases within seconds using AI-powered tools.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-lg-4 col-md-6">
//                                 <div className="stat-item">
//                                     <div className="stat-icon">
//                                         <i className="bi bi-card-text" />
//                                     </div>
//                                     <div className="stat-content">
//                                         <h4>Interactive Reports</h4>
//                                         <p className="mb-0">
//                                             Generate detailed and visually rich reports for better decision-making.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-lg-4 col-md-6">
//                                 <div className="stat-item">
//                                     <div className="stat-icon">
//                                         <i className="bi bi-file-earmark-arrow-down" />
//                                     </div>
//                                     <div className="stat-content">
//                                         <h4>Farmer Tools</h4>
//                                         <p className="mb-0">
//                                             Simplify disease identification with step-by-step guides and downloadable resources.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-lg-4 col-md-6">
//                                 <div className="stat-item">
//                                     <div className="stat-icon">
//                                         <i className="bi bi-star" />
//                                     </div>
//                                     <div className="stat-content">
//                                         <h4>User Testimonials</h4>
//                                         <p className="mb-0">
//                                             Learn how our platform has transformed farming practices worldwide.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-lg-4 col-md-6">
//                                 <div className="stat-item">
//                                     <div className="stat-icon">
//                                         <i className="bi bi-person-gear" />
//                                     </div>
//                                     <div className="stat-content">
//                                         <h4>Expert Support</h4>
//                                         <p className="mb-0">
//                                             Connect with agronomists for personalized recommendations and support.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//                 <section id="about" className="about section">
//                     <div className="container" data-aos="fade-up" data-aos-delay={100}>
//                         <div className="row gy-4 align-items-center justify-content-between">
//                             <div className="col-xl-5" data-aos="fade-up" data-aos-delay={200}>
//                                 <span className="about-meta">MORE ABOUT US</span>
//                                 <h2 className="about-title">
//                                     <p>Welcome to Arecanut Disease Detection</p>
//                                 </h2>
//                                 <p className="about-description">
//                                     A cutting-edge platform designed to detect diseases in Arecanut crops, helping farmers identify and address issues early. Our tool leverages the power of AI to recognize and diagnose common diseases, ensuring healthier crops and higher yields.
//                                 </p>
//                                 <div className="row feature-list-wrapper">
//                                     <div className="col-md-12">
//                                         <ul className="feature-list">
//                                             <li>
//                                                 <i className="bi bi-check-circle-fill" />
//                                                 Uses AI to identify diseases in Arecanut plants.
//                                             </li>
//                                             <li>
//                                                 <i className="bi bi-check-circle-fill" />
//                                                 Provides timely disease detection to prevent crop loss.
//                                             </li>
//                                             <li>
//                                                 <i className="bi bi-check-circle-fill" />
//                                                 Offers a user-friendly interface for easy disease identification.
//                                             </li>
//                                         </ul>
//                                     </div>
//                                     <div className="col-md-12">
//                                         <ul className="feature-list">
//                                             <li>
//                                                 <i className="bi bi-check-circle-fill" />
//                                                 Aims to help farmers maintain healthy Arecanut crops.
//                                             </li>
//                                             <li>
//                                                 <i className="bi bi-check-circle-fill" />
//                                                 Promotes sustainable farming practices through early detection.
//                                             </li>
//                                             <li>
//                                                 <i className="bi bi-check-circle-fill" />
//                                                 Enables farmers to make informed decisions for crop management.
//                                             </li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-xl-6" data-aos="fade-up" data-aos-delay={300}>
//                                 <div className="image-wrapper">
//                                     <div
//                                         className="images position-relative"
//                                         data-aos="zoom-out"
//                                         data-aos-delay={400}
//                                     >
//                                         <img
//                                             src={about5} // You can replace this with an image related to Arecanut disease detection
//                                             alt="Arecanut Disease Detection"
//                                             className="img-fluid main-image rounded-4"
//                                         />
//                                     </div>
//                                     <div className="experience-badge floating">
//                                         <h3>
//                                             10+ <span>Years</span>
//                                         </h3>
//                                         <p>Of Expertise in Agricultural Disease Detection</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 <section id="features" className="features section">
//                     <div className="container section-title" data-aos="fade-up">
//                         <h2>Symptoms</h2>
//                         <p>Symptoms for Arecanut Disease Detection</p>
//                     </div>
//                     <div className="container">
//                         <div className="d-flex justify-content-center">
//                             <ul className="nav nav-tabs" data-aos="fade-up" data-aos-delay={100}>
//                                 <li className="nav-item">
//                                     <a
//                                         className="nav-link active show"
//                                         data-bs-toggle="tab"
//                                         data-bs-target="#features-tab-1"
//                                         href="/"
//                                     >
//                                         <h4>Symptoms</h4>
//                                     </a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a
//                                         href="/"
//                                         className="nav-link"
//                                         data-bs-toggle="tab"
//                                         data-bs-target="#features-tab-2"
//                                     >
//                                         <h4>Detection</h4>
//                                     </a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a
//                                         href="/"
//                                         className="nav-link"
//                                         data-bs-toggle="tab"
//                                         data-bs-target="#features-tab-3"
//                                     >
//                                         <h4>Prevention</h4>
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className="tab-content" data-aos="fade-up" data-aos-delay={200}>
//                             <div className="tab-pane fade active show" id="features-tab-1">
//                                 <div className="row">
//                                     <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
//                                         <h3>Symptoms of Arecanut Diseases</h3>
//                                         <p className="fst-italic">1. Yellowing of leaves</p>
//                                         <p className="fst-italic">2. Wilting of leaves and stems</p>
//                                         <p className="fst-italic">3. Blackening of roots</p>
//                                         <p className="fst-italic">4. Stunted growth</p>
//                                         <p className="fst-italic">5. Premature fruit drop</p>
//                                         <p className="fst-italic">6. Browning of leaf edges</p>
//                                         <p className="fst-italic">7. Discolored spots on fruits</p>
//                                     </div>
//                                     <div className="col-lg-6 order-1 order-lg-2 text-center">
//                                         <img
//                                             src={features_illustration_1} // Replace with a relevant image related to Arecanut disease symptoms
//                                             alt="Arecanut disease symptoms"
//                                             className="img-fluid"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="tab-pane fade" id="features-tab-2">
//                                 <div className="row">
//                                     <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
//                                         <h3>Detection Techniques for Arecanut Diseases</h3>
//                                         <p className="fst-italic">1. Visual inspection of leaves and fruits</p>
//                                         <p className="fst-italic">2. AI-powered image recognition tools</p>
//                                         <p className="fst-italic">3. Soil testing for pathogens</p>
//                                         <p className="fst-italic">4. Detection through satellite or drone imaging</p>
//                                         <p className="fst-italic">5. Regular monitoring using smart sensors</p>
//                                         <p className="fst-italic">6. Field surveys and expert consultation</p>
//                                     </div>
//                                     <div className="col-lg-6 order-1 order-lg-2 text-center">
//                                         <img
//                                             src={features_illustration_2} // Replace with an image related to Arecanut disease detection methods
//                                             alt="Arecanut disease detection"
//                                             className="img-fluid"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="tab-pane fade" id="features-tab-3">
//                                 <div className="row">
//                                     <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
//                                         <h3>Prevention and Treatment for Arecanut Diseases</h3>
//                                         <p className="fst-italic">1. Use of disease-resistant varieties</p>
//                                         <p className="fst-italic">2. Proper irrigation and drainage</p>
//                                         <p className="fst-italic">3. Application of fungicides and pesticides</p>
//                                         <p className="fst-italic">4. Pruning affected branches</p>
//                                         <p className="fst-italic">5. Maintaining soil health through organic farming</p>
//                                         <p className="fst-italic">6. Crop rotation and intercropping</p>
//                                         <p className="fst-italic">7. Regular monitoring and early intervention</p>
//                                     </div>
//                                     <div className="col-lg-6 order-1 order-lg-2 text-center">
//                                         <img
//                                             src={features_illustration_3} // Replace with an image related to Arecanut disease prevention
//                                             alt="Arecanut disease prevention"
//                                             className="img-fluid"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </main>
//             <footer id="footer" className="footer">
//                 <div className="container footer-top">
//                     <div className="row gy-4">
//                         <div className="col-lg-4 col-md-6 footer-about">
//                             <a href="index.html" className="logo d-flex align-items-center">
//                                 <span className="sitename">Arecanut Disease Detection</span>
//                             </a>
//                             <div className="footer-contact pt-3">
//                                 <p>Presidency University,</p>
//                                 <p>Yelhanka, Karnataka 560064</p>
//                                 <p className="mt-3">
//                                     {/* <strong>Phone:</strong> <span>+1 5589 55488 55</span> */}
//                                 </p>
//                                 <p>
//                                     <strong>Email:</strong> <span>arecanutdisease@researchhub.com</span>
//                                 </p>
//                             </div>
//                             <div className="social-links d-flex mt-4">
//                                 <a href>
//                                     <i className="bi bi-twitter-x" />
//                                 </a>
//                                 <a href>
//                                     <i className="bi bi-facebook" />
//                                 </a>
//                                 <a href>
//                                     <i className="bi bi-instagram" />
//                                 </a>
//                                 <a href>
//                                     <i className="bi bi-linkedin" />
//                                 </a>
//                             </div>
//                         </div>
//                         <div className="col-lg-2 col-md-3 footer-links">
//                             <h4>Useful Links</h4>
//                             <ul>
//                                 <li>
//                                     <a href="/">Home</a>
//                                 </li>
//                                 <li>
//                                     <a href="/">About us</a>
//                                 </li>
//                                 <li>
//                                     <a href="/">Research</a>
//                                 </li>
//                                 <li>
//                                     <a href="/">Terms of service</a>
//                                 </li>
//                                 <li>
//                                     <a href="/">Privacy policy</a>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className="col-lg-2 col-md-3 footer-links">
//                             <h4>Our Services</h4>
//                             <ul>
//                                 <li>
//                                     <a href="/">Disease Detection</a>
//                                 </li>
//                                 <li>
//                                     <a href="/">Data Analysis</a>
//                                 </li>
//                                 <li>
//                                     <a href="/">Diagnostic Tools</a>
//                                 </li>
//                                 <li>
//                                     <a href="/">Research Publication</a>
//                                 </li>
//                                 <li>
//                                     <a href="/">Consulting</a>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className="col-lg-2 col-md-3 footer-links">
//                             <h4>Additional Resources</h4>
//                             <ul>
//                                 <li>
//                                     <a href="/">Publications</a>
//                                 </li>
//                                 <li>
//                                     <a href="/">News</a>
//                                 </li>
//                                 <li>
//                                     <a href="/">Case Studies</a>
//                                 </li>
//                                 <li>
//                                     <a href="/">Research Grants</a>
//                                 </li>
//                                 <li>
//                                     <a href="/">Events</a>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className="col-lg-2 col-md-3 footer-links">
//                             <h4>Our Solutions</h4>
//                             <ul>
//                                 <li>
//                                     <a href="/">AI-Based Detection</a>
//                                 </li>
//                                 <li>
//                                     <a href="/">Mobile Application</a>
//                                 </li>
//                                 <li>
//                                     <a href="/">Web Application</a>
//                                 </li>
//                                 <li>
//                                     <a href="/">Farmer Support</a>
//                                 </li>
//                                 <li>
//                                     <a href="/">Research Collaboration</a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="container copyright text-center mt-4">
//                     <p>
//                         © <span>Copyright</span>{" "}
//                         <strong className="px-1 sitename">Arecanut Disease Detection</strong>{" "}
//                         <span>All Rights Reserved</span>|<Link to="/disclaimer">Disclaimer</Link> | <Link to="/privacyandpolicy">Privacy Policy</Link> | <Link to="/termsandconditions">Terms & Conditions</Link>
//                     </p>
//                 </div>
//             </footer>


//             <a
//                 href="/"
//                 id="scroll-top"
//                 className="scroll-top d-flex align-items-center justify-content-center"
//             >
//                 <i className="bi bi-arrow-up-short" />
//             </a>
//         </body>
//     );
// }

// export default Home;

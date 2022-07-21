import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Helmet from "react-helmet"
import imgSlider1 from "../images/carrusel/1.jpg"
import imgSlider2 from "../images/carrusel/2.jpg"
import imgSlider3 from "../images/carrusel/3.jpg"
import imgSlider4 from "../images/carrusel/4.jpg"
import imgReality from "../images/reality.jpg"
import imgLogo from "../images/logo.svg"

/* Gallery - Editorial */
import imgGalleryEd1 from "../images/galeria/editorial/cartagena-maglio-perez.jpg"
import imgGalleryEd2 from "../images/galeria/editorial/cartagena-maglio-perez2.jpg"
import imgGalleryEd3 from "../images/galeria/editorial/nocturno-pablo-cabrera.jpg"
import imgGalleryEd4 from "../images/galeria/editorial/nocturno-pablo-cabrera2.jpg"
import imgGalleryEd5 from "../images/galeria/editorial/venus-colectivo-granada.jpg"
import imgGalleryEd6 from "../images/galeria/editorial/venus-colectivo-granada2.jpg"

/* Gallery - Exhibiciones */

import imgGalleryEx1 from "../images/galeria/exposiciones/agustina-triquell-embalse.jpg"
import imgGalleryEx2 from "../images/galeria/exposiciones/fernando-montiel-distopia.jpg"
import imgGalleryEx3 from "../images/galeria/exposiciones/misha-vallejo-manta-manaus.jpg"
import imgGalleryEx4 from "../images/galeria/exposiciones/musuk-nolte-sombra-de-isla.jpg"
import imgGalleryEx5 from "../images/galeria/exposiciones/paloma-palomino-estados.jpg"
import imgGalleryEx6 from "../images/galeria/exposiciones/tamara-merino-diario-de-cuarentena.jpg"




const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Helmet>
      <script src="https://kit.fontawesome.com/34b4176060.js" crossorigin="anonymous"></script>
      </Helmet>

      {/* Preloader */}

      <div className="preloader d-none"></div>






{/* Slider */}

{/* <section className="main-slider">
    <div className="toolbar">
        <div className="legend-text">
        Espacio Fotográfico <br />
Tienda - Galería - Librería - Editorial
        </div>
        <button type="submit" className="theme-btn btn-style-three"><span className="txt">Tienda Online</span></button>
    </div>
  <img src={imgSlider} alt="" />
</section> */}

<section className="main-slider">
    	
        <div className="rev_slider_wrapper fullwidthbanner-container"  id="rev_slider_one_wrapper" data-source="gallery">
            <div className="rev_slider fullwidthabanner" id="rev_slider_one" data-version="5.4.1">
                <ul>
                	
                    <li data-transition="slidingoverlayhorizontal" data-description="Slide Description"  data-index="rs-1688" data-slotamount="default" data-thumb="https://via.placeholder.com/1900x955" data-title="Slide Title">
                    <img alt="" className="rev-slidebg" data-bgfit="cover" data-bgparallax="10" data-bgposition="center center" data-bgrepeat="no-repeat" data-no-retina="" src={imgSlider1}/> 
                    
                    <div className="tp-caption" 
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingtop="[0,0,0,0]"
                    data-responsive_offset="on"
                    data-type="text"
                    data-height="none"
                    data-width="['800','800','800','420']"
                    data-whitespace="normal"
                    data-hoffset="['0','0','0','0']"
                    data-voffset="['-60','-80','-110','-100']"
                    data-x="['center','center','center','center']"
                    data-y="['middle','middle','middle','middle']"
                    data-textalign="['top','top','top','top']"
                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'>
                    	<h2 className="text-center">
                            Espacio Fotográfico <br/>
                            Tienda - Galería - Librería - Editorial

                        </h2>
                    </div>
                    
                    <div className="tp-caption" 
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingtop="[0,0,0,0]"
                    data-responsive_offset="on"
                    data-type="text"
                    data-height="none"
                    data-whitespace="normal"
                    data-width="['800','800','700','480']"
                    data-hoffset="['0','0','0','0']"
                    data-voffset="['55','30','10','-15']"
                    data-x="['center','center','center','center']"
                    data-y="['middle','middle','middle','middle']"
                    data-textalign="['top','top','top','top']"
                    data-frames='[{"from":"x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'>
                    	<div className="text text-center">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</div>
                    </div>
                    
                    <div className="tp-caption" 
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingtop="[0,0,0,0]"
                    data-responsive_offset="on"
                    data-type="text"
                    data-height="none"
                    data-width="['600','600','400','360']"
                    data-whitespace="normal"
                    data-hoffset="['0','0','0','0']"
                    data-voffset="['150','120','120','100']"
                    data-x="['center','center','center','center']"
                    data-y="['middle','middle','middle','middle']"
                    data-textalign="['top','top','top','top']"
                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'>
                    	<div className="text-center">
                    		<a href="contact.html" className="theme-btn btn-style-one"><span className="txt">Contact Now</span></a>
                        </div>
                    </div>
                    
                    </li>
                    
                    <li data-transition="slidingoverlayhorizontal" data-description="Slide Description"  data-index="rs-1689" data-slotamount="default" data-thumb="https://via.placeholder.com/1900x850" data-title="Slide Title">
                    <img alt="" className="rev-slidebg" data-bgfit="cover" data-bgparallax="10" data-bgposition="center center" data-bgrepeat="no-repeat" data-no-retina="" src={imgSlider2}/>
                    
					<div className="tp-caption" 
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingtop="[0,0,0,0]"
                    data-responsive_offset="on"
                    data-type="text"
                    data-height="none"
                    data-width="['800','800','800','420']"
                    data-whitespace="normal"
                    data-hoffset="['0','0','0','0']"
                    data-voffset="['-60','-80','-110','-100']"
                    data-x="['center','center','center','center']"
                    data-y="['middle','middle','middle','middle']"
                    data-textalign="['top','top','top','top']"
                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'>
                    	<h2 className="text-center">REACH today AND GROW you business.</h2>
                    </div>
                    
                    <div className="tp-caption" 
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingtop="[0,0,0,0]"
                    data-responsive_offset="on"
                    data-type="text"
                    data-height="none"
                    data-whitespace="normal"
                    data-width="['800','800','700','480']"
                    data-hoffset="['0','0','0','0']"
                    data-voffset="['55','30','10','-15']"
                    data-x="['center','center','center','center']"
                    data-y="['middle','middle','middle','middle']"
                    data-textalign="['top','top','top','top']"
                    data-frames='[{"from":"x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'>
                    	<div className="text text-center">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</div>
                    </div>
                    
                    <div className="tp-caption" 
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingtop="[0,0,0,0]"
                    data-responsive_offset="on"
                    data-type="text"
                    data-height="none"
                    data-width="['600','600','400','360']"
                    data-whitespace="normal"
                    data-hoffset="['0','0','0','0']"
                    data-voffset="['150','120','120','100']"
                    data-x="['center','center','center','center']"
                    data-y="['middle','middle','middle','middle']"
                    data-textalign="['top','top','top','top']"
                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'>
                    	<div className="text-center">
                    		<a href="contact.html" className="theme-btn btn-style-one"><span className="txt">Contact Now</span></a>
                        </div>
                    </div>
					
                    </li>
					
					<li data-transition="slidingoverlayhorizontal" data-description="Slide Description"  data-index="rs-1690" data-slotamount="default" data-thumb="https://via.placeholder.com/1900x955" data-title="Slide Title">
                    <img alt="" className="rev-slidebg" data-bgfit="cover" data-bgparallax="10" data-bgposition="center center" data-bgrepeat="no-repeat" data-no-retina="" src={imgSlider3}/>
                    
					<div className="tp-caption" 
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingtop="[0,0,0,0]"
                    data-responsive_offset="on"
                    data-type="text"
                    data-height="none"
                    data-width="['800','800','800','420']"
                    data-whitespace="normal"
                    data-hoffset="['0','0','0','0']"
                    data-voffset="['-60','-80','-110','-100']"
                    data-x="['center','center','center','center']"
                    data-y="['middle','middle','middle','middle']"
                    data-textalign="['top','top','top','top']"
                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'>
                    	<h2 className="text-center">We are here for your business help.</h2>
                    </div>
                    
                    <div className="tp-caption" 
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingtop="[0,0,0,0]"
                    data-responsive_offset="on"
                    data-type="text"
                    data-height="none"
                    data-whitespace="normal"
                    data-width="['800','800','700','480']"
                    data-hoffset="['0','0','0','0']"
                    data-voffset="['55','30','10','-15']"
                    data-x="['center','center','center','center']"
                    data-y="['middle','middle','middle','middle']"
                    data-textalign="['top','top','top','top']"
                    data-frames='[{"from":"x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'>
                    	<div className="text text-center">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</div>
                    </div>
                    
                    <div className="tp-caption" 
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingtop="[0,0,0,0]"
                    data-responsive_offset="on"
                    data-type="text"
                    data-height="none"
                    data-width="['600','600','400','360']"
                    data-whitespace="normal"
                    data-hoffset="['0','0','0','0']"
                    data-voffset="['150','120','120','100']"
                    data-x="['center','center','center','center']"
                    data-y="['middle','middle','middle','middle']"
                    data-textalign="['top','top','top','top']"
                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'>
                    	<div className="text-center">
                    		<a href="contact.html" className="theme-btn btn-style-one"><span className="txt">Contact Now</span></a>
                        </div>
                    </div>
					
                    </li>
                    <li data-transition="slidingoverlayhorizontal" data-description="Slide Description"  data-index="rs-1690" data-slotamount="default" data-thumb="https://via.placeholder.com/1900x955" data-title="Slide Title">
                        <img alt="" className="rev-slidebg" data-bgfit="cover" data-bgparallax="10" data-bgposition="center center" data-bgrepeat="no-repeat" data-no-retina="" src={imgSlider4}/>
                        
                        <div className="tp-caption" 
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingtop="[0,0,0,0]"
                        data-responsive_offset="on"
                        data-type="text"
                        data-height="none"
                        data-width="['800','800','800','420']"
                        data-whitespace="normal"
                        data-hoffset="['0','0','0','0']"
                        data-voffset="['-60','-80','-110','-100']"
                        data-x="['center','center','center','center']"
                        data-y="['middle','middle','middle','middle']"
                        data-textalign="['top','top','top','top']"
                        data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'>
                            <h2 className="text-center">We are here for your business help.</h2>
                        </div>
                        
                        <div className="tp-caption" 
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingtop="[0,0,0,0]"
                        data-responsive_offset="on"
                        data-type="text"
                        data-height="none"
                        data-whitespace="normal"
                        data-width="['800','800','700','480']"
                        data-hoffset="['0','0','0','0']"
                        data-voffset="['55','30','10','-15']"
                        data-x="['center','center','center','center']"
                        data-y="['middle','middle','middle','middle']"
                        data-textalign="['top','top','top','top']"
                        data-frames='[{"from":"x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'>
                            <div className="text text-center">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</div>
                        </div>
                        
                        <div className="tp-caption" 
                        data-paddingbottom="[0,0,0,0]"
                        data-paddingleft="[0,0,0,0]"
                        data-paddingright="[0,0,0,0]"
                        data-paddingtop="[0,0,0,0]"
                        data-responsive_offset="on"
                        data-type="text"
                        data-height="none"
                        data-width="['600','600','400','360']"
                        data-whitespace="normal"
                        data-hoffset="['0','0','0','0']"
                        data-voffset="['150','120','120','100']"
                        data-x="['center','center','center','center']"
                        data-y="['middle','middle','middle','middle']"
                        data-textalign="['top','top','top','top']"
                        data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'>
                            <div className="text-center">
                                <a href="contact.html" className="theme-btn btn-style-one"><span className="txt">Contact Now</span></a>
                            </div>
                        </div>
                        
                        </li>
                    
                </ul>
                
            </div>
        </div>
    </section>


{/* Reality Section */}

{/*Reality Section*/}
    <section className="reality-section">
    	<div className="auto-container">
        	<div className="row clearfix align-items-center">
            	
                {/*Gallery Column*/}
                <div className="gallery-column col-lg-6 col-md-12 col-sm-12">
					
                	<div className="cont-foto">
						<img src={imgReality} alt="" />
                        
                    </div>
                </div>
                
                {/*Content Column*/}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                	<div className="inner-column">
                    	<h2>Espacio Fotográfico</h2>
                        <div className="text">
							<p>FLACH es un espacio permanente de difusión y 
                                comercialización de fotografía chilena y latinoamericana, 
                                ubicado en el centro de Santiago de Chile.</p>
							<p>Con el objetivo de acercar la disciplina fotográfica a un 
                                público amplio y masivo, desde 2016 ofrece su espacio como 
                                un lugar de exhibición, encuentro y circulación de obra fotográfica, 
                                fotolibros y otros medios de difusión de la fotografía.</p>
						</div>
						
						{/* Numbering */}
						<div className="numbering">
							<div className="row clearfix">
								
								{/* About Number */}
								<div className="about-number col-lg-6 col-md-6 col-sm-12">
									<div className="number">GALERÍA </div>
								</div>
								
								{/* About Number */}
								<div className="about-number col-lg-6 col-md-6 col-sm-12">
									<div className="number">TIENDA</div>
								</div>
								
								{/* About Number */}
								<div className="about-number col-lg-6 col-md-6 col-sm-12">
									<div className="number">LIBRERÍA</div>
								</div>
								
								{/* About Number */}
								<div className="about-number col-lg-6 col-md-6 col-sm-12">
									<div className="number">EDITORIAL</div>
								</div>
								
							</div>
						</div>
						
                        
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    {/*End Reality Section*/}


{/* Features */}


<section className="services-section-two">
    	<div className="auto-container">
        	<div className="row clearfix">
            	
                {/*Services Block Two*/}
                <div className="services-block-two col-lg-4 col-md-6 col-sm-12">
                	<div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <h3><a href="services.html">Tienda / Librería</a></h3>
                        <div className="text">Amplia y exclusiva selección de fotolibros de editoriales 
                        chilenas y latinoamericanas, fotografía de autor, objetos y regalos.</div>
                    </div>
                </div>
                
                {/*Services Block Two*/}
                <div className="services-block-two col-lg-4 col-md-6 col-sm-12">
                	<div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <h3><a href="services.html">Galería</a></h3>
                        <div className="text">Espacio de encuentro, conversación y reflexión 
                        sobre la fotografía en sus diversas aristas, presencial y virtual, con autores, aficionados y expertos</div>
                    </div>
                </div>
                
                {/*Services Block Two*/}
                <div className="services-block-two col-lg-4 col-md-6 col-sm-12">
                	<div className="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <h3><a href="services.html">Editorial</a></h3>
                        <div className="text">
                        Espacio expositivo que mantiene una programación de fotografía chilena y latinoamericana contemporánea.
                        </div>
                    </div>
                </div>
                
                {/*Services Block Two*/}
                <div className="services-block-two col-lg-4 col-md-6 col-sm-12">
                	<div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <h3><a href="services.html">Charlas</a></h3>
                        <div className="text">
                        Ofreciendo la oportunidad de aprender en pequeños grupos sobre diversas temáticas técnicas y teóricas de la fotografía.
                        </div>
                    </div>
                </div>
                
				{/*Services Block Two*/}
                <div className="services-block-two col-lg-4 col-md-6 col-sm-12">
                	<div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <h3><a href="services.html">Talleres</a></h3>
                        <div className="text">
                        Produce y difunde proyectos fotográficos contemporáneos inéditos, tanto de carácter individual como colectivo.
                        </div>
                    </div>
                </div>
				
				{/*Services Block Two*/}
                <div className="services-block-two col-lg-4 col-md-6 col-sm-12">
                	<div className="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <h3><a href="services.html">Feria</a></h3>
                        <div className="text">
                        StgoFoto es el primer encuentro y feria dedicada a la producción de fotolibro en Chile, 
                        teniendo su primera versión en agosto de 2022.
                        </div>
                    </div>
                </div>
				
            </div>
        </div>
    </section>


{/* End Features */}


{/* Gallery Section */}

<section className="gallery-section">
    	<div className="auto-container">
        	<div className="sec-title centered">
            	<h2>Nuestro Trabajo</h2>
                <div className="text">
                    Proyectos realizados por FLACH en sus 6 años de existencia como espacio
                    </div>
            </div>
            
            {/*Gallery Masonry*/}
            <div className="sortable-masonry">
                {/*Filter*/}
                <div className="filters">
                	<ul className="filter-tabs filter-btns clearfix">
                        {/* <li className="filter active" data-role="button" data-filter=".all"><span className="txt">Todo</span></li> */}
						<li className="filter" data-role="button" data-filter=".editorial"><span className="txt">Editorial</span></li>
						<li className="filter" data-role="button" data-filter=".exhibicion"><span className="txt">Exhibiciones</span></li>
                        
                    </ul>
                </div>
                <div className="items-container row clearfix masonry">

                    {/*Gallery Item Two*/}
                    <div className="gallery-item-two masonry-item col-lg-4 col-md-6 col-sm-12 photography design editorial">
						<div className="inner-box">
                        	<div className="image">
                            	<img src={imgGalleryEd2} alt="" />
                                <div className="overlay-box">
                                	<div className="overlay-inner">
                                    	<div className="content">
											<a href={imgGalleryEd2} data-fancybox="portfolio" data-caption="" className="image-link lightbox-image"><span className="icon pe-7s-expand1"></span></a>
                                        	<h3><a href="portfolio-single-1.html">Cartagena</a></h3>
                                            <div className="title">Maglio Perez</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Gallery Item Two*/}
                    <div className="gallery-item-two masonry-item col-lg-4 col-md-6 col-sm-12 inspiration concept editorial">
						<div className="inner-box">
                        	<div className="image">
                            	<img src={imgGalleryEd5} alt="" />
                                <div className="overlay-box">
                                	<div className="overlay-inner">
                                    	<div className="content">
											<a href={imgGalleryEd5} data-fancybox="portfolio" data-caption="" className="image-link lightbox-image"><span className="icon pe-7s-expand1"></span></a>
                                        	<h3><a href="portfolio-single-1.html">Venus</a></h3>
                                            <div className="title">Colectivo Granada</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Gallery Item Two*/}
                    <div className="gallery-item-two masonry-item col-lg-4 col-md-6 col-sm-12 inspiration concept editorial">
						<div className="inner-box">
                        	<div className="image">
                            	<img src={imgGalleryEd4} alt="" />
                                <div className="overlay-box">
                                	<div className="overlay-inner">
                                    	<div className="content">
											<a href={imgGalleryEd4} data-fancybox="portfolio" data-caption="" className="image-link lightbox-image"><span className="icon pe-7s-expand1"></span></a>
                                        	<h3><a href="portfolio-single-1.html">Nocturno</a></h3>
                                            <div className="title">Pablo Cabrera</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Gallery Item Two*/}
                    <div className="gallery-item-two masonry-item col-lg-4 col-md-6 col-sm-12 editorial">
						<div className="inner-box">
                        	<div className="image">
                            	<img src={imgGalleryEd1} alt="" />
                                <div className="overlay-box">
                                	<div className="overlay-inner">
                                    	<div className="content">
											<a href={imgGalleryEd1} data-fancybox="portfolio" data-caption="" className="image-link lightbox-image"><span className="icon pe-7s-expand1"></span></a>
                                        	<h3><a href="portfolio-single-1.html">Cartagena</a></h3>
                                            <div className="title">Maglio perez</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/*Gallery Item Two*/}
                    <div className="gallery-item-two masonry-item col-lg-4 col-md-6 col-sm-12 design inspiration editorial">
						<div className="inner-box">
                        	<div className="image">
                            	<img src={imgGalleryEd6} alt="" />
                                <div className="overlay-box">
                                	<div className="overlay-inner">
                                    	<div className="content">
											<a href={imgGalleryEd6} data-fancybox="portfolio" data-caption="" className="image-link lightbox-image"><span className="icon pe-7s-expand1"></span></a>
                                        	<h3><a href="portfolio-single-1.html">Venus</a></h3>
                                            <div className="title">Colectivo Granada</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    
                    
                    {/*Gallery Item Two*/}
                    <div className="gallery-item-two masonry-item col-lg-4 col-md-6 col-sm-12 photography design concept editorial">
						<div className="inner-box">
                        	<div className="image">
                            	<img src={imgGalleryEd3} alt="" />
                                <div className="overlay-box">
                                	<div className="overlay-inner">
                                    	<div className="content">
										<a href={imgGalleryEd3} data-fancybox="portfolio" data-caption="" className="image-link lightbox-image"><span className="icon pe-7s-expand1"></span></a>
                                        	<h3><a href="portfolio-single-1.html">Nocturno</a></h3>
                                            <div className="title">Pablo Cabrera</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    
                    
                    
                    
                    
                    
    
                </div>


                <div className="items-container row clearfix masonry">
                    {/*Gallery Item Two*/}
                    <div className="gallery-item-two masonry-item col-lg-4 col-md-6 col-sm-12 exhibicion">
						<div className="inner-box">
                        	<div className="image">
                            	<img src={imgGalleryEx1} alt="" />
                                <div className="overlay-box">
                                	<div className="overlay-inner">
                                    	<div className="content">
											<a href={imgGalleryEx1} data-fancybox="portfolio" data-caption="" className="image-link lightbox-image"><span className="icon pe-7s-expand1"></span></a>
                                        	<h3><a href="portfolio-single-1.html">Embalse</a></h3>
                                            <div className="title">Agustina Triquell</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    

                    {/*Gallery Item Two*/}
                    <div className="gallery-item-two masonry-item col-lg-4 col-md-6 col-sm-12 photography design exhibicion">
						<div className="inner-box">
                        	<div className="image">
                            	<img src={imgGalleryEx2} alt="" />
                                <div className="overlay-box">
                                	<div className="overlay-inner">
                                    	<div className="content">
											<a href={imgGalleryEx2} data-fancybox="portfolio" data-caption="" className="image-link lightbox-image"><span className="icon pe-7s-expand1"></span></a>
                                        	<h3><a href="portfolio-single-1.html">Distopia</a></h3>
                                            <div className="title">Fernando Montiel</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Gallery Item Two*/}
                    <div className="gallery-item-two masonry-item col-lg-4 col-md-6 col-sm-12 design inspiration exhibicion">
						<div className="inner-box">
                        	<div className="image">
                            	<img src={imgGalleryEx6} alt="" />
                                <div className="overlay-box">
                                	<div className="overlay-inner">
                                    	<div className="content">
											<a href={imgGalleryEx6} data-fancybox="portfolio" data-caption="" className="image-link lightbox-image"><span className="icon pe-7s-expand1"></span></a>
                                        	<h3><a href="portfolio-single-1.html">Diario de Cuarentena</a></h3>
                                            <div className="title">Tamara Merino</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


{/*Gallery Item Two*/}
<div className="gallery-item-two masonry-item col-lg-4 col-md-6 col-sm-12 inspiration concept exhibicion">
						<div className="inner-box">
                        	<div className="image">
                            	<img src={imgGalleryEx5} alt="" />
                                <div className="overlay-box">
                                	<div className="overlay-inner">
                                    	<div className="content">
											<a href={imgGalleryEx5} data-fancybox="portfolio" data-caption="" className="image-link lightbox-image"><span className="icon pe-7s-expand1"></span></a>
                                        	<h3><a href="portfolio-single-1.html">Estados</a></h3>
                                            <div className="title">Paloma Palominos</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    {/*Gallery Item Two*/}
                    <div className="gallery-item-two masonry-item col-lg-4 col-md-6 col-sm-12 photography design concept exhibicion">
						<div className="inner-box">
                        	<div className="image">
                            	<img src={imgGalleryEx3} alt="" />
                                <div className="overlay-box">
                                	<div className="overlay-inner">
                                    	<div className="content">
										<a href={imgGalleryEx3} data-fancybox="portfolio" data-caption="" className="image-link lightbox-image"><span className="icon pe-7s-expand1"></span></a>
                                        	<h3><a href="portfolio-single-1.html">Manta - Manaus</a></h3>
                                            <div className="title">Misha Vallejo</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    
                    
                    
                    {/*Gallery Item Two*/}
                    <div className="gallery-item-two masonry-item col-lg-4 col-md-6 col-sm-12 inspiration concept exhibicion">
						<div className="inner-box">
                        	<div className="image">
                            	<img src={imgGalleryEx4} alt="" />
                                <div className="overlay-box">
                                	<div className="overlay-inner">
                                    	<div className="content">
											<a href={imgGalleryEx4} data-fancybox="portfolio" data-caption="" className="image-link lightbox-image"><span className="icon pe-7s-expand1"></span></a>
                                        	<h3><a href="portfolio-single-1.html">Sombra de Isla</a></h3>
                                            <div className="title">Musuk Nolte</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    
                    
                </div>
				
				{/* Button Box */}
				<div className="button-box text-center">
					<a href="#" className="theme-btn btn-style-three"><span className="txt">Load More</span></a>
				</div>
				
            </div>
        </div>
    </section>

{/* Gallery Section */}


{/* Instagram */}
<section className="gallery-section">
  <div className="sec-title centered">
            	<h2>Instagram</h2>
                {/* <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit Vivamus dui orci sodales a pellentesque sodales pellentesque elit Vivamus...</div> */}
            </div>
            <div className="cont-gallery gallery-3">
                <div className="foto-gallery"></div>
                <div className="foto-gallery"></div>
                <div className="foto-gallery"></div>
            </div>
</section>
{/* Instagram */}


{/* Youtube */}
<section className="gallery-section">
  <div className="sec-title centered">
            	<h2>Youtube</h2>
                {/* <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit Vivamus dui orci sodales a pellentesque sodales pellentesque elit Vivamus...</div> */}
            </div>
            <div className="cont-gallery gallery-4">
                <div className="foto-gallery"></div>
                <div className="foto-gallery"></div>
                <div className="foto-gallery"></div>
                <div className="foto-gallery"></div>
            </div>

</section>
{/* Youtube */}


{/* Contact */}

<section className="fluid-section-one">
    	<div className="outer-container clearfix">
        
        	{/*Map Column*/}
            <div className="map-column">
                {/*Map Outer*/}
                <div className="map-outer">
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805184.6331292129!2d144.49266890254142!3d-37.97123689954809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1574408946759!5m2!1sen!2s" width="100%" height="800px" frameborder="0" style="border:0;" allowfullscreen=""></iframe> */}
                </div>
            </div>
        
        	{/*Form Column*/}
            <div className="form-column">
                <div className="inner-column">
                	<div className="sec-title">
                    	<h2>Contáctanos</h2>
						<div className="text">¿Tienes preguntas? Escríbenos y te contactaremos dentro de los próximos días</div>
                    </div>
                	<div className="content">
                        {/*Default Form*/}
                        <div className="default-form">
                            <form method="post" action="contact.html">
                                <div className="row clearfix">
                                    
									<div className="form-group col-md-6 col-sm-6 col-xs-12">
                                        <input type="text" name="username" defaultValue="" placeholder="Nombre" required/>
                                    </div>
                                    
                                    <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                        <input type="email" name="email" defaultValue="" placeholder="Email" required/>
                                    </div>
									
									<div className="form-group col-md-6 col-sm-6 col-xs-12">
                                        <input type="text" name="phone" defaultValue="" placeholder="Teléfono" required/>
                                    </div>
                                    
                                    <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                        <input type="text" name="subject" defaultValue="" placeholder="Tema" required/>
                                    </div>
                                    
                                    <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                        <textarea name="message" placeholder="Mensaje "></textarea>
                                    </div>
                                    
                                    <div className="form-group btn-column col-md-12 col-sm-12 col-xs-12">
                                        <button type="submit" className="theme-btn btn-style-three"><span className="txt">Enviar</span></button>
                                    </div>
                                    
                                </div>
                                
                            </form>
                        </div>
                        {/*End Default Form*/}
                        <div className="map-info-content">
                        	<div className="address">Villavicencio 301, departamento A, Santiago, RM, 8320129</div>
                            <div className="email">flachtiendagaleria@gmail.com</div>
                            <div className="contact-number">56 942523165</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
	</section>

{/* Contact */}



      {/* <Bio /> */}

      
     {/*  
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
*/} 


    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`

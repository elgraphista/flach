import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Helmet from "react-helmet"
import imgSlider from "../images/carrusel/1.jpg"
import imgReality from "../images/reality.jpg"
import imgLogo from "../images/logo.svg"


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

<section className="main-slider">
    <div className="toolbar">
        <div className="legend-text">
        Espacio Fotográfico <br />
Tienda - Galería - Librería - Editorial
        </div>
        <button type="submit" className="theme-btn btn-style-three"><span className="txt">Tienda Online</span></button>
    </div>
  <img src={imgSlider} alt="" />
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
                        <li className="filter active" data-role="button" data-filter=".all"><span className="txt">Editorial</span></li>
						<li className="filter" data-role="button" data-filter=".design"><span className="txt">Exhibiciones</span></li>
                        
                    </ul>
                </div>
                <div className="items-container row clearfix masonry">
                
                    {/*Gallery Item Two*/}
                    <div className="gallery-item-two masonry-item col-lg-4 col-md-6 col-sm-12 all">
						<div className="inner-box">
                        	<div className="image">
                            	<img src="https://via.placeholder.com/370x500" alt="" />
                                <div className="overlay-box">
                                	<div className="overlay-inner">
                                    	<div className="content">
											<a href="https://via.placeholder.com/370x500" data-fancybox="portfolio" data-caption="" className="image-link lightbox-image"><span className="icon pe-7s-expand1"></span></a>
                                        	<h3><a href="portfolio-single-1.html">Business</a></h3>
                                            <div className="title">Photography</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/*Gallery Item Two*/}
                    <div className="gallery-item-two masonry-item col-lg-4 col-md-6 col-sm-12 photography design all">
						<div className="inner-box">
                        	<div className="image">
                            	<img src="https://via.placeholder.com/370x235" alt="" />
                                <div className="overlay-box">
                                	<div className="overlay-inner">
                                    	<div className="content">
											<a href="https://via.placeholder.com/370x235" data-fancybox="portfolio" data-caption="" className="image-link lightbox-image"><span className="icon pe-7s-expand1"></span></a>
                                        	<h3><a href="portfolio-single-1.html">Business</a></h3>
                                            <div className="title">Photography</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/*Gallery Item Two*/}
                    <div className="gallery-item-two masonry-item col-lg-4 col-md-6 col-sm-12 photography design concept all">
						<div className="inner-box">
                        	<div className="image">
                            	<img src="https://via.placeholder.com/370x500" alt="" />
                                <div className="overlay-box">
                                	<div className="overlay-inner">
                                    	<div className="content">
										<a href="https://via.placeholder.com/370x500" data-fancybox="portfolio" data-caption="" className="image-link lightbox-image"><span className="icon pe-7s-expand1"></span></a>
                                        	<h3><a href="portfolio-single-1.html">Business</a></h3>
                                            <div className="title">Photography</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/*Gallery Item Two*/}
                    <div className="gallery-item-two masonry-item col-lg-4 col-md-6 col-sm-12 inspiration concept all">
						<div className="inner-box">
                        	<div className="image">
                            	<img src="https://via.placeholder.com/370x500" alt="" />
                                <div className="overlay-box">
                                	<div className="overlay-inner">
                                    	<div className="content">
											<a href="https://via.placeholder.com/370x500" data-fancybox="portfolio" data-caption="" className="image-link lightbox-image"><span className="icon pe-7s-expand1"></span></a>
                                        	<h3><a href="portfolio-single-1.html">Business</a></h3>
                                            <div className="title">Photography</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/*Gallery Item Two*/}
                    <div className="gallery-item-two masonry-item col-lg-4 col-md-6 col-sm-12 inspiration concept all">
						<div className="inner-box">
                        	<div className="image">
                            	<img src="https://via.placeholder.com/370x235" alt="" />
                                <div className="overlay-box">
                                	<div className="overlay-inner">
                                    	<div className="content">
											<a href="https://via.placeholder.com/370x235" data-fancybox="portfolio" data-caption="" className="image-link lightbox-image"><span className="icon pe-7s-expand1"></span></a>
                                        	<h3><a href="portfolio-single-1.html">Business</a></h3>
                                            <div className="title">Photography</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/*Gallery Item Two*/}
                    <div className="gallery-item-two masonry-item col-lg-4 col-md-6 col-sm-12 design inspiration all">
						<div className="inner-box">
                        	<div className="image">
                            	<img src="https://via.placeholder.com/370x235" alt="" />
                                <div className="overlay-box">
                                	<div className="overlay-inner">
                                    	<div className="content">
											<a href="https://via.placeholder.com/370x235" data-fancybox="portfolio" data-caption="" className="image-link lightbox-image"><span className="icon pe-7s-expand1"></span></a>
                                        	<h3><a href="portfolio-single-1.html">Business</a></h3>
                                            <div className="title">Photography</div>
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
                                        <input type="text" name="username" value="" placeholder="Nombre" required/>
                                    </div>
                                    
                                    <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                        <input type="email" name="email" value="" placeholder="Email" required/>
                                    </div>
									
									<div className="form-group col-md-6 col-sm-6 col-xs-12">
                                        <input type="text" name="phone" value="" placeholder="Teléfono" required/>
                                    </div>
                                    
                                    <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                        <input type="text" name="subject" value="" placeholder="Tema" required/>
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

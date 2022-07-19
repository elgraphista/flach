import * as React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import imgLogo from "../images/logo.svg"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (

    <>

    <div className="global-wrapper page-wrapper" data-is-root-path={isRootPath}>

{/* Main Header / Header Style One*/}
<header className="main-header header-style-one">
        
        {/*Header-Upper*/}
        <div className="header-upper">
        	<div className="auto-container">
            	<div className="inner-container clearfix">
                	
                	<div className="logo-outer">
                    	<div className="logo"><a href="index.html"> <img src={imgLogo} alt="" title=""/></a></div>
                    </div>
                    
                    <div className="upper-right clearfix">
                    	
                        <div className="nav-outer clearfix">

                            {/* Main Menu */}
                            <nav className="main-menu navbar navbar-expand-md">
                                <button className="button navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
        
                                  <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                    <ul className="navigation navbar-nav default-hover">
                                        <li className="current"><a href="#">Inicio</a></li>
                                        <li className="current"><a href="#">Tienda</a></li>
                                        <li className="current"><a href="#">Exposiciones</a></li>
                                        <li className="current"><a href="#">Contacto</a></li>
                                    </ul>
                                  </div>
                            </nav>
                            {/* Main Menu End*/}
                            
                            {/*More Options*/}
                            <div className="more-options">
                            	
                                
                            	<ul className="social-icon-one">
                                    <li><a href="#"><span className="fa fa-facebook"></span></a></li>
                                	<li><a href="#"><span className="fa fa-twitter"></span></a></li>
                                    <li><a href="#"><span className="fa fa-youtube"></span></a></li>
                                    <li><a href="#"><span className="fa fa-instagram"></span></a></li>
                                </ul>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
        {/*End Header Upper*/}
        
        {/*Sticky Header*/}
        <div className="sticky-header">
            <div className="auto-container clearfix">
                {/*Logo*/}
                <div className="logo pull-left">
                    <a href="index.html" className="img-responsive" title="Flach"><img src={imgLogo} alt="Tali" title="Flach"/></a>
                </div>
                
                {/*Right Col*/}
                <div className="right-col pull-right">
                    {/* Main Menu */}
                    <nav className="main-menu navbar navbar-expand-md">
                        <button className="button navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                          <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                            <ul className="navigation navbar-nav default-hover">

                                <li className="current"><a href="#">Inicio</a></li>
                                <li className=""><a href="#">Tienda</a></li>
                                <li className=""><a href="#">Exposiciones</a></li>
                                <li className=""><a href="#">Contacto</a></li>

                            </ul>
                          </div>
                    </nav>
                    {/* Main Menu End*/}
                </div>
                
            </div>
        </div>
        {/*End Sticky Header*/}
    
    </header>
    {/*End Main Header */}
      {/* <header className="global-header">{header}</header> */}
      <main>{children}</main>
      {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer> */}
      <footer className="main-footer">
    	<div className="auto-container">
        
        	{/*Widgets Section*/}
            <div className="widgets-section">
            	<div className="row clearfix">
					
					{/*big column*/}
                    <div className="big-column col-lg-6 col-md-12 col-sm-12">
                        <div className="row clearfix">
						
							{/*Footer Column*/}
							<div className="footer-column col-lg-6 col-md-6 col-sm-12">
								<div className="footer-widget logo-widget">
									<div className="logo">
										<a href="index.html"><img src={imgLogo} alt="" /></a>
									</div>
									<ul>
										<li>flachtiendagaleria@gmail</li>
										<li>56 94253165</li>
									</ul>

                  <div className="">
                        <ul className="social-icon-two">
                            <li><a href="#"><span className="fa fa-facebook-f"></span></a></li>
                            <li><a href="#"><span className="fa fa-twitter"></span></a></li>
                            
                            <li><a href="#"><span className="fa fa-youtube-play"></span></a></li>
                            <li><a href="#"><span className="fa fa-instagram"></span></a></li>
                        </ul>
                    </div>
								</div>
							</div>
						
							{/*Footer Column*/}
							<div className="footer-column col-lg-4 col-md-6 col-sm-12">
								<div className="footer-widget list-widget">
									{/*Footer Title*/}
									{/* <div className="footer-title">
										<h2>Categories</h2>
									</div>
									<ul>
										<li><a href="#">Abbey Projects</a></li>
										<li><a href="#">Pricing</a></li>
										<li><a href="#">Faq's</a></li>
										<li><a href="#">Blogs</a></li>
										<li><a href="#">Products</a></li>
									</ul> */}
								</div>
							</div>
						
						</div>
					</div>	
					
                    {/*big column*/}
                    <div className="big-column col-lg-6 col-md-12 col-sm-12">
                        <div className="row clearfix">
						
							{/*Footer Column*/}
							<div className="footer-column col-lg-5 col-md-6 col-sm-12">
								<div className="footer-widget list-widget">
									{/*Footer Title*/}
									{/* <div className="footer-title">
										<h2>Links</h2>
									</div>
									<ul>
										<li><a href="#">Abbey Projects</a></li>
										<li><a href="#">Pricing</a></li>
										<li><a href="#">Faq's</a></li>
										<li><a href="#">Blogs</a></li>
										<li><a href="#">Products</a></li>
									</ul> */}
								</div>
							</div>
							
							{/*Footer Column*/}
							<div className="footer-column col-lg-7 col-md-6 col-sm-12">
								<div className="footer-widget instagram-widget">
									{/*Footer Title*/}
									<div className="footer-title">
										<h2>Instagram</h2>
									</div>
									<div className="widget-content">
										<div className="clearfix">
											<div className="image"><a href="https://via.placeholder.com/311x311" data-fancybox="images-1" data-caption="" className="image-link lightbox-image"><img src="https://via.placeholder.com/85x85" alt="" /></a></div>
											<div className="image"><a href="https://via.placeholder.com/285x285" data-fancybox="images-1" data-caption="" className="image-link lightbox-image"><img src="https://via.placeholder.com/85x85" alt="" /></a></div>
											<div className="image"><a href="https://via.placeholder.com/285x285" data-fancybox="images-1" data-caption="" className="image-link lightbox-image"><img src="https://via.placeholder.com/85x85" alt="" /></a></div>
											<div className="image"><a href="https://via.placeholder.com/634x445" data-fancybox="images-1" data-caption="" className="image-link lightbox-image"><img src="https://via.placeholder.com/85x85" alt="" /></a></div>
											<div className="image"><a href="https://via.placeholder.com/634x445" data-fancybox="images-1" data-caption="" className="image-link lightbox-image"><img src="https://via.placeholder.com/85x85" alt="" /></a></div>
											<div className="image"><a href="https://via.placeholder.com/370x500" data-fancybox="images-1" data-caption="" className="image-link lightbox-image"><img src="https://via.placeholder.com/85x85" alt="" /></a></div>
											<div className="image"><a href="https://via.placeholder.com/370x235" data-fancybox="images-1" data-caption="" className="image-link lightbox-image"><img src="https://via.placeholder.com/85x85" alt="" /></a></div>
											<div className="image"><a href="https://via.placeholder.com/370x500" data-fancybox="images-1" data-caption="" className="image-link lightbox-image"><img src="https://via.placeholder.com/85x85" alt="" /></a></div>
										</div>
									</div>
							   </div>
						  </div>
						
						</div>
					</div>
                   
                </div>
			</div>
		</div>
		
       	{/*Footer Bottom*/}
        <div className="footer-bottom">
        	<div className="auto-container">
                <div className="inner-footer-bottom clearfix">
                    <div className="pull-left">
                        <div className="copyright">Copyright &copy; FLACH SpA 2022</div>
                    </div>
                    <div className="pull-right">
                        <div className="scroll-to-top scroll-to-target" data-target="html">Volver al inicio</div>
                    </div>
                    <div className="text-center">
                        <ul className="social-icon-two">
                            <li><a href="#"><span className="fa fa-facebook-f"></span></a></li>
                            <li><a href="#"><span className="fa fa-twitter"></span></a></li>
                            
                            <li><a href="#"><span className="fa fa-youtube-play"></span></a></li>
                            <li><a href="#"><span className="fa fa-instagram"></span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
   </footer>
    </div>
    <Helmet>
    <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossOrigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.11.5/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>

{/* Rev Slider */}
{/* <script src="plugins/revolution/js/jquery.themepunch.revolution.min.js"></script>
<script src="plugins/revolution/js/jquery.themepunch.tools.min.js"></script>
<script src="plugins/revolution/js/extensions/revolution.extension.actions.min.js"></script>
<script src="plugins/revolution/js/extensions/revolution.extension.carousel.min.js"></script>
<script src="plugins/revolution/js/extensions/revolution.extension.kenburn.min.js"></script>
<script src="plugins/revolution/js/extensions/revolution.extension.layeranimation.min.js"></script>
<script src="plugins/revolution/js/extensions/revolution.extension.migration.min.js"></script>
<script src="plugins/revolution/js/extensions/revolution.extension.navigation.min.js"></script>
<script src="plugins/revolution/js/extensions/revolution.extension.parallax.min.js"></script>
<script src="plugins/revolution/js/extensions/revolution.extension.slideanims.min.js"></script>
<script src="plugins/revolution/js/extensions/revolution.extension.video.min.js"></script>
<script src="js/main-slider-script.js"></script> */}
{/* Rev Slider */}

<script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.2.1/jquery.fancybox.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.0/owl.carousel.min.js"></script>
<script src="https://cdn.tutorialjinni.com/jquery.appear/0.4.1/jquery.appear.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.0.1/wow.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/2.1.1/isotope.pkgd.min.js"></script>
{/* <script src="../js/cursor.js"></script>
<script src="./src/js/script.js"></script> */}
      </Helmet>
    </>
  )
}

export default Layout

import { Search, ShoppingCart, Heart, Menu, Truck, ShieldCheck, MessageCircle, ChevronRight, MapPin, UserRound, Home, Grid2X2, Sparkles, Flame, Clock3, Gift, ArrowRight } from 'lucide-react';

const categories = ['Termos y mates','Bazar','Hogar','Belleza','Regalos','Organización','Cocina','Accesorios'];
const products = [
  {name:'Producto destacado Haunted',category:'Termos y mates',price:'₲ 189.000',old:'₲ 229.000',tag:'-17%'},
  {name:'Producto de temporada',category:'Bazar',price:'₲ 99.000',old:'₲ 119.000',tag:'OFERTA'},
  {name:'Favorito para regalar',category:'Regalos',price:'₲ 149.000',old:'₲ 179.000',tag:'-16%'},
  {name:'Nuevo ingreso Haunted',category:'Hogar',price:'₲ 79.000',old:'',tag:'NUEVO'},
  {name:'Elegido de la semana',category:'Termos y mates',price:'₲ 129.000',old:'₲ 149.000',tag:'-13%'},
  {name:'Esencial para tu día',category:'Organización',price:'₲ 89.000',old:'₲ 109.000',tag:'-18%'}
];

function ProductCard({p,i}:{p:typeof products[number],i:number}){return <article className="product-card"><div className={`product-photo photo-${(i%6)+1}`}><span className="discount">{p.tag}</span><button className="heart" aria-label="Agregar a favoritos"><Heart size={18}/></button><div className="photo-placeholder"><span>FOTO</span><small>Producto Haunted</small></div></div><div className="product-info"><small>{p.category}</small><h3>{p.name}</h3><div className="price-row"><strong>{p.price}</strong>{p.old&&<del>{p.old}</del>}</div><span className="delivery">Delivery disponible</span><button className="add">Agregar al carrito <ShoppingCart size={16}/></button></div></article>}
function ProductRow({items=products}:{items?:typeof products}){return <div className="product-scroll">{items.map((p,i)=><ProductCard key={`${p.name}-${i}`} p={p} i={i}/>)}</div>}

export default function HomePage(){return <main>
<div className="topbar"><span><Truck size={13}/> Envíos a todo Paraguay</span><span className="desktop-only"><MessageCircle size={13}/> Atención por WhatsApp</span><span><ShieldCheck size={13}/> Compra fácil y segura</span></div>
<header className="header"><div className="head-main"><button className="menu-mobile" aria-label="Menú"><Menu/></button><a className="brand" href="#"><span>Haunted</span><small>TIENDA ONLINE</small></a><div className="search"><Search size={20}/><input aria-label="Buscar productos" placeholder="Buscar productos, categorías y más..."/><button>Buscar</button></div><div className="actions"><button><UserRound/><span>Mi cuenta</span></button><button><Heart/><span>Favoritos</span></button><button className="cart"><ShoppingCart/><b>0</b><span>Carrito</span></button></div></div><div className="mobile-search search"><Search size={19}/><input aria-label="Buscar productos" placeholder="¿Qué estás buscando?"/></div><nav><button><Menu size={18}/> Todas las categorías</button>{categories.slice(0,6).map(c=><a key={c} href="#categorias">{c}</a>)}<a className="sale" href="#ofertas">Ofertas</a></nav></header>

<section className="hero shell"><div className="hero-copy"><span className="eyebrow">NUEVA TIENDA ONLINE</span><h1>Encontrá eso que<br/><em>te va a encantar.</em></h1><p>Productos para vos, tu casa y para regalar. Comprá fácil y recibí donde estés.</p><div className="hero-actions"><a href="#ofertas">Comprar ahora <ArrowRight size={17}/></a><a className="secondary" href="#categorias">Ver categorías</a></div></div><div className="hero-commerce"><span className="big-offer">OFERTAS<br/><b>DESTACADAS</b></span><div className="visual-card vc1">NUEVOS<br/>INGRESOS</div><div className="visual-card vc2">PARA<br/>REGALAR</div><div className="visual-card vc3">HOGAR<br/>& BAZAR</div></div></section>

<section className="quick shell"><a href="#ofertas"><Flame/><span><b>Ofertas</b><small>Precios especiales</small></span></a><a href="#"><Clock3/><span><b>Recién llegados</b><small>Lo nuevo en Haunted</small></span></a><a href="#"><Gift/><span><b>Ideas para regalar</b><small>Encontrá algo especial</small></span></a><a href="#categorias"><Grid2X2/><span><b>Todas las categorías</b><small>Explorá la tienda</small></span></a></section>

<section id="categorias" className="section shell"><div className="section-title"><div><span>ENCONTRÁ MÁS RÁPIDO</span><h2>Comprá por categoría</h2></div><a href="#">Ver todas <ChevronRight size={17}/></a></div><div className="category-grid">{categories.map((c,i)=><a className={`category cat-${(i%6)+1}`} key={c} href="#"><div><Grid2X2 size={25}/></div><strong>{c}</strong><small>Explorar</small></a>)}</div></section>

<section id="ofertas" className="section shell retail-section"><div className="section-title"><div><span>APROVECHÁ HOY</span><h2>Ofertas destacadas</h2></div><a href="#">Ver todas <ChevronRight size={17}/></a></div><ProductRow/></section>

<section className="commercial-grid shell"><a className="commercial commercial-dark" href="#"><span>ESPECIAL HAUNTED</span><h2>Encontrá tu<br/>próximo favorito</h2><b>Ver productos <ChevronRight size={16}/></b></a><a className="commercial commercial-light" href="#"><span>NUEVOS INGRESOS</span><h2>Siempre hay<br/>algo nuevo</h2><b>Descubrir <ChevronRight size={16}/></b></a></section>

<section className="section shell retail-section"><div className="section-title"><div><span>LOS FAVORITOS DE LA TIENDA</span><h2>Más vendidos</h2></div><a href="#">Ver todos <ChevronRight size={17}/></a></div><ProductRow items={[...products].reverse()}/></section>

<section className="deal shell"><div><span>OPORTUNIDAD DE LA SEMANA</span><h2>Precios que vale la pena mirar.</h2><p>Una selección de productos con precios especiales por tiempo limitado.</p></div><a href="#ofertas">Ver oportunidades <ArrowRight size={18}/></a></section>

<section className="section shell retail-section"><div className="section-title"><div><span>ACABAN DE LLEGAR</span><h2>Recién llegados</h2></div><a href="#">Ver novedades <ChevronRight size={17}/></a></div><ProductRow items={[products[3],products[5],products[1],products[0],products[4],products[2]]}/></section>

<section className="benefits shell"><div><Truck/><span><b>Envíos a todo el país</b><small>Asunción e interior</small></span></div><div><MessageCircle/><span><b>Comprá por WhatsApp</b><small>Atención personalizada</small></span></div><div><ShieldCheck/><span><b>Compra segura</b><small>Estamos para ayudarte</small></span></div><div><MapPin/><span><b>Delivery disponible</b><small>Consultá cobertura</small></span></div></section>

<section className="newsletter"><div className="shell newsletter-inner"><div><Sparkles/><span><b>Promos y novedades de Haunted</b><small>Enterate primero de nuevos ingresos y oportunidades.</small></span></div><div><input placeholder="Tu correo electrónico"/><button>Quiero recibir novedades</button></div></div></section>
<footer><div className="shell footer-grid"><div className="footer-brand"><span>Haunted</span><small>TIENDA ONLINE</small><p>Productos que te gustan, atención cercana y envíos a todo Paraguay.</p></div><div><b>Tienda</b><a href="#">Productos</a><a href="#">Categorías</a><a href="#">Ofertas</a><a href="#">Novedades</a></div><div><b>Ayuda</b><a href="#">Cómo comprar</a><a href="#">Envíos</a><a href="#">Cambios</a><a href="#">Contacto</a></div><div><b>Estamos para ayudarte</b><p>Escribinos y te ayudamos con tu compra.</p><button className="wa"><MessageCircle size={18}/> Hablar por WhatsApp</button></div></div><div className="copyright shell">© 2026 Haunted Tienda Online <span>Desarrollado por eQuantum</span></div></footer>
<nav className="bottom-nav"><a href="#"><Home/><span>Inicio</span></a><a href="#categorias"><Grid2X2/><span>Categorías</span></a><a href="#" className="search-bottom"><Search/><span>Buscar</span></a><a href="#"><Heart/><span>Favoritos</span></a><a href="#"><ShoppingCart/><span>Carrito</span></a></nav>
</main>}

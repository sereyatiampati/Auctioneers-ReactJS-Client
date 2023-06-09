import './categories.css'
import EachCategory from './EachCategory'
import { useNavigate } from "react-router-dom";

function Categories () {
    let navigator = useNavigate();
    const cat = {
        cursor: 'pointer'
    }

    return (
        <>
<div class="container">

  <header class="section-header">
    <h2>OUR CATEGORIES</h2>
    <p>Find Products By Category</p>
  </header>
    <div class="row mt-2 g-4">
        <div class="col-md-3">
            <div class="card-category p-1">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Smart</span> <span>Phones</span> </div>
                    <div
                    style={cat}
                    onClick={() => {
                    navigator("/categories/1")
                    }}> <img src="https://i.ebayimg.com/images/g/H2YAAOSw8KthE6N8/s-l500.jpg" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card-category p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span></span> <span>Clothing</span> </div>
                    <div
                    style={cat}
                    onClick={() => {
                    navigator("/categories/2")
                    }}> <img src="https://shopgoodwillimages.azureedge.net/production/General/img-cat-clothing.webp" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card-category p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Smart</span> <span>Watches</span> </div>
                    <div
                    style={cat}
                    onClick={() => {
                    navigator("/categories/3")
                    }}> <img src="https://media.istockphoto.com/id/1380063784/photo/smart-watch-close-up-on-a-white-background-3d-render.jpg?b=1&s=170667a&w=0&k=20&c=YE-ayMaexI7kjc5C0LaZeMAXUDYSYRY9z2VMW4_Jt5U=" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card-category p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Home</span> <span>Decor</span> </div>
                    <div
                    style={cat}
                    onClick={() => {
                    navigator("/categories/4")
                    }}> <img src="https://res.cloudinary.com/dwrwnflkr/image/upload/v1682797111/flowerpots-gb74b1410a_1920_v45jjl.jpg" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card-category p-2tr5">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Jewellery</span> <span>& Gemstones</span> </div>
                    <div
                    style={cat}
                    onClick={() => {
                    navigator("/categories/5")
                    }}> <img src="https://res.cloudinary.com/dwrwnflkr/image/upload/v1682793911/b5e95b62-4cca-427e-8e70-9348b16bab0crown_0427t1_1_wv2eon.png" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card-category p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Washing</span> <span>Machines</span> </div>
                    <div
                    style={cat}
                    onClick={() => {
                    navigator("/categories/6")
                    }}> <img src="https://res.cloudinary.com/dwrwnflkr/image/upload/v1682796630/oli-woodman-nUL_PP69IPA-unsplash_lukes0.jpg" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card-category p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Smart</span> <span>Televisions</span> </div>
                    <div
                    style={cat}
                    onClick={() => {
                    navigator("/categories/7")
                    }}> <img src="https://ibid.modeltheme.com/vuejs/img/smartTv.db3e2cd1.jpg" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card-category p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Laptops</span> </div>
                    <div
                    style={cat}
                    onClick={() => {
                    navigator("/categories/8")
                    }}> <img src="https://ibid.modeltheme.com/vuejs/img/laptop-cat1.ffd64937.jpg" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card-category p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Headphones</span> </div>
                    <div
                    style={cat}
                    onClick={() => {
                    navigator("/categories/9")
                    }}> <img src="https://images.unsplash.com/photo-1547932087-59a8f2be576e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGhlYWRwaG9uZXMlMjAlMjYlMjBzbWFydHdhdGNoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card-category p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Vacuum</span> <span>Cleaners</span></div>
                    <div
                    style={cat}
                    onClick={() => {
                    navigator("/categories/10")
                    }}> <img src="https://images.unsplash.com/photo-1600322305530-45714a0bc945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmFjdXVtJTIwY2xlYW5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card-category p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Household</span> <span>Items</span></div>
                    <div
                    style={cat}
                    onClick={() => {
                    navigator("/categories/11")
                    }}> <img src="https://plus.unsplash.com/premium_photo-1668614524295-c3bb5bb3a2b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2Vob2xkJTIwSXRlbXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card-category p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Computers</span> <span>& Accessories</span></div>
                    <div
                    style={cat}
                    onClick={() => {
                    navigator("/categories/12")
                    }}> <img src="https://images.unsplash.com/photo-1545875615-86f54b81a82d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y3VydmVkJTIwdHZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    );
}
 
export default Categories;
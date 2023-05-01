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
                    <div> <img src="https://i.ebayimg.com/images/g/H2YAAOSw8KthE6N8/s-l500.jpg" height="100" width="100" /> </div>
                    <div class="flex-column lh-1 imagename"> <span>Mobile phones</span> & <span>Laptops</span></div>
                    <div
                    style={cat}
                    onClick={() => {
                        navigator("/categories/1")
                    }}> <img src="https://i.imgur.com/b9zkoz0.jpg" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card-category p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span></span> <span>Clothing</span> </div>
                    <div> <img src="https://shopgoodwillimages.azureedge.net/production/General/img-cat-clothing.webp" height="100" width="100" /> </div>
                    <div class="flex-column lh-1 imagename"> <span>Headphones</span> </div>
                    <div
                    style={cat}
                    onClick={() => {
                        navigator("/categories/2")
                    }}> <img src="https://i.imgur.com/SHWASPG.png" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card-category p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Smart</span> <span>Watches</span> </div>
                    <div> <img src="https://media.istockphoto.com/id/1380063784/photo/smart-watch-close-up-on-a-white-background-3d-render.jpg?b=1&s=170667a&w=0&k=20&c=YE-ayMaexI7kjc5C0LaZeMAXUDYSYRY9z2VMW4_Jt5U=" height="100" width="100" /> </div>
                    <div class="flex-column lh-1 imagename"> <span>Household</span> <span>Items</span> </div>
                    <div
                    style={cat}
                    onClick={() => {
                        navigator("/categories/3")
                    }}> <img src="https://i.imgur.com/2gvGwbh.png" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card-category p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Home</span> <span>Decor</span> </div>
                    <div> <img src="https://res.cloudinary.com/dwrwnflkr/image/upload/v1682797111/flowerpots-gb74b1410a_1920_v45jjl.jpg" height="100" width="100" /> </div>
                    <div class="flex-column lh-1 imagename"> <span>Smart</span> <span>Watches</span> </div>
                    <div
                    style={cat}
                    onClick={() => {
                        navigator("/categories/4")
                    }}> <img src=" https://i.imgur.com/Ya0OXCv.png" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        
        <div class="col-md-3">
            <div class="card-category p-2tr5">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Jewellery</span> <span>& Gemstones</span> </div>
                    <div> <img src="https://res.cloudinary.com/dwrwnflkr/image/upload/v1682793911/b5e95b62-4cca-427e-8e70-9348b16bab0crown_0427t1_1_wv2eon.png" height="100" width="100" /> </div>
                    <div class="flex-column lh-1 imagename"> <span>Vacuum</span> <span>Cleaners</span> </div>
                    <div
                    style={cat}
                    onClick={() => {
                        navigator("/categories/5")
                    }}> <img src="https://i.imgur.com/UMQJpSG.png" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card-category p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Washing</span> <span>Machines</span> </div>
                    <div> <img src="https://res.cloudinary.com/dwrwnflkr/image/upload/v1682796630/oli-woodman-nUL_PP69IPA-unsplash_lukes0.jpg" height="100" width="100" /> </div>
                    <div
                    style={cat}
                    onClick={() => {
                        navigator("/categories/6")
                    }}> <img src="https://i.imgur.com/e9CyhXR.png" height="100" width="100" /> </div>
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
                    <div class="flex-column lh-1 imagename"> <span>Clothing</span> </div>
                    <div
                    style={cat}
                    onClick={() => {
                        navigator("/categories/8")
                    }}
                    > <img src="https://i.imgur.com/6pK5oZl.jpg" height="100" width="100" /> </div>
                    <div class="flex-column lh-1 imagename"> <span>Laptops</span> </div>
                    <div> <img src="https://ibid.modeltheme.com/vuejs/img/laptop-cat1.ffd64937.jpg" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    );
}
 
export default Categories;
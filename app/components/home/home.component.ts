import { Component } from '@angular/core';

@Component({
    selector: 'home',
    template: `
        <p>&nbsp;</p>
        <h3>Home</h3>
        <p>&nbsp;</p>
        <div>
            <slideshow
                [height] = "height"
                [minHeight] = "'525px'"
                [autoPlay] = "true"
                [showArrows] = "false"
                [lazyLoad] = "imageSources?.length > 1"
                [autoPlayWaitForLazyLoad] = "true"
                [imageUrls]= imageUrls>
            </slideshow>
        </div>
    `
})

export class HomeComponent {
   
    public imageUrls = ["./assets/images/20170107_220823.jpg",
                "./assets/images/20170107_220839.jpg",
                "./assets/images/20170108_205303.jpg",
                "./assets/images/20170108_205433.jpg",
                "./assets/images/IMG_2480.JPG",
                "./assets/images/IMG_20181227_073000.jpg"
            ]
 
}
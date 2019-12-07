import React, {Component} from 'react';
import mike from '../components/Pictures/mike.JPG'
import zev from '../components/Pictures/zev.jpg'
import kameron from '../components/Pictures/kameron.jpg'
import amit from '../components/Pictures/amit.jpg'
import andrew from '../components/Pictures/andrew.jpg'

// import test from '../components/Pictures/test.png'

class home extends Component{

    render() {
        return (
          <div class="big-box">
                     Refuge-Resource is an application for those who are recovering from any type of natural disaster, and those who want to help them. Individuals may post if they have, or require any resources (such as housing, food, medical supplies, etc). Posts are sorted between “Help Needed” and “Help Offered” pages, where they can be further filtered by type of resource. This application was built with React, node.js, and MongoDB. IT was made with the hope that it will improve the ways communities can come together for a common goal. 


            <section class="developers">
                <section class="zev">
                    <section><img src={zev} width="100px" height="100px" alt=""></img></section>
                    <section>
                        <h3>Zev H</h3>
                        <h5>Github</h5>
                    </section>
                </section>

                <section class="mike">
                    <section><img src={mike} width="100px" height="100px" alt=""></img></section>
                    <section>
                        <h3>Mike B</h3>
                        <h5>Github</h5>
                    </section>
                </section>

                <section class="amit">
                    <section><img src={amit} width="100px" height="100px" alt=""></img></section>
                    <section>
                        <h3>Amit G</h3>
                        <h5>Github</h5>
                    </section>
                </section>

                <section class="andrew">
                    <section><img src={andrew} width="100px" height="100px" alt=""></img></section>
                    <section>
                        <h3>Andrew T</h3>
                        <h5>Github</h5>
                    </section>
                </section>
                <section class="kameron">
                    <section><img src={kameron} width="100px" height="100px" alt=""></img></section>
               
                    <section>
                        <h3>Kameron M</h3>
                        <h5>Github</h5>
                    </section>
                </section>
               

      
            </section>
           


          </div>
          
        )
      }

}



export default home;
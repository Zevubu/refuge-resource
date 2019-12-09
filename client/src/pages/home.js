import React, {Component} from 'react';
import mike from '../components/Pictures/mike.JPG'
import zev from '../components/Pictures/zev.jpg'
import kameron from '../components/Pictures/kameron.jpg'
import amit from '../components/Pictures/amit.jpg'
import andrew from '../components/Pictures/andrew.jpg'
import '../index.css'

// import test from '../components/Pictures/test.png'

class home extends Component{

    render() {
        return (
          <div class="big-box">
                <div class="jumbotron">
                    <span>Refuge-Resource is an application for those who are recovering from any type of natural disaster, and those who want to help them.</span>
                    <p><span>Individuals may post if they have, or require any resources (such as housing, food, medical supplies, etc).
                        Posts are sorted between “Help Needed” and “Help Offered” pages, where they can be further filtered by type of resource.</span></p>
                        This application was built with React, node.js, and MongoDB.
                        It was made with the hope that it will improve the ways communities can come together for a common goal.
                </div>
            <section class="developers">
                <section class="zev">
                    <h4>Zev</h4>
                    <section><a href="https://github.com/Zevubu"><img src={zev} width="100%" height="100%" alt="Zev"></img></a></section>
                    <section>
                        <h5><a href="https://github.com/Zevubu">Github</a></h5>
                    </section>
                </section>

                <section class="mike">
                <h4>Mike</h4>
                    <section><a href="https://github.com/TheForgeProductions"><img src={mike} width="100%" height="100%" alt="Mike"></img></a></section>
                    <section>
                        <h5><a href="https://github.com/TheForgeProductions">Github</a></h5>
                    </section>
                </section>

                <section class="amit">
                <h4>Amit</h4>
                    <section><a href="https://github.com/asg240"><img src={amit} width="105%" height="105%" alt="Amit"></img></a></section>
                    <section>
                        <h5><a href="https://github.com/asg240">Github</a></h5>
                    </section>
                </section>

                <section class="andrew">
                    <h4>Andrew</h4>
                    <section><a href="https://github.com/atocchi"><img src={andrew} width="90%" height="100%" alt="Andrew"></img></a></section>
                    <section>
                    <h5><a href="https://github.com/atocchi">Github</a></h5>
                    </section>
                </section>

                <section class="kameron">
                    <h4>Kam</h4>
                    <section><a href="https://github.com/kam7933"><img src={kameron} width="95%" height="100%" alt="Kam"></img></a></section>
                    <section>
                    <h5><a href="https://github.com/kam7933">Github</a></h5>
                    </section>
                </section>
               

      
            </section>
           


          </div>
          
        )
      }

}



export default home;
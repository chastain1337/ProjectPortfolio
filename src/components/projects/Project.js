import React from "react";
import { Col, Image, Row, Container } from "react-bootstrap";
import ProjectDetail from "./ProjectDetail"

function Project() {
  return (
    <Container>
    <Row>
      <Col lg={5} mb-lg={0} mb-5>
        <Image fluid rounded src="https://mdbootstrap.com/img/Photos/Others/images/83.jpg"/>
      </Col>
      <Col lg={7}>
        <ProjectDetail />
        <ProjectDetail />
        <ProjectDetail />
      </Col>
    </Row>  
    </Container>
  );

  {
    /* 
  
      <!-- Grid row -->
      <div class="row mb-3">
        <div class="col-md-1 col-2">
          <i class="fas fa-code fa-2x red-text"></i>
        </div>
        <div class="col-md-11 col-10">
          <h5 class="font-weight-bold mb-3">Technology</h5>
          <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing. Reprehenderit maiores nam,
            aperiam minima elit assumenda voluptate velit.</p>
        </div>
      </div>
      <!-- Grid row -->

      <!-- Grid row -->
      <div class="row">
        <div class="col-md-1 col-2">
          <i class="far fa-money-bill-alt fa-2x deep-purple-text"></i>
        </div>
        <div class="col-md-11 col-10">
          <h5 class="font-weight-bold mb-3">Finance</h5>
          <p class="grey-text mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing. Reprehenderit maiores
            nam, aperiam minima elit assumenda voluptate velit.</p>
        </div>
      </div>
      <!-- Grid row -->

    </div>
    <!-- Grid column -->

  </div>
  <!-- Grid row -->

  <hr class="my-5">

  <!-- Grid row -->
  <div class="row">

    <!-- Grid column -->
    <div class="col-lg-7">

      <!-- Grid row -->
      <div class="row mb-3">
        <div class="col-md-1 col-2">
          <i class="far fa-chart-bar fa-2x indigo-text"></i>
        </div>
        <div class="col-md-11 col-10">
          <h5 class="font-weight-bold mb-3">Marketing</h5>
          <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing. Reprehenderit maiores nam,
            aperiam minima elit assumenda voluptate velit.</p>
        </div>
      </div>
      <!-- Grid row -->

      <!-- Grid row -->
      <div class="row mb-3">
        <div class="col-md-1 col-2">
          <i class="fas fa-music fa-2x pink-text"></i>
        </div>
        <div class="col-md-11 col-10">
          <h5 class="font-weight-bold mb-3">Entertainment</h5>
          <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing. Reprehenderit maiores nam,
            aperiam minima elit assumenda voluptate velit.</p>
        </div>
      </div>
      <!-- Grid row -->

      <!-- Grid row -->
      <div class="row mb-lg-0 mb-5">
        <div class="col-md-1 col-2">
          <i class="far fa-grin fa-2x blue-text"></i>
        </div>
        <div class="col-md-11 col-10">
          <h5 class="font-weight-bold mb-3">Communication</h5>
          <p class="grey-text mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing. Reprehenderit maiores
            nam, aperiam minima elit assumenda voluptate velit.</p>
        </div>
      </div>
      <!-- Grid row -->

    </div>
    <!-- Grid column -->

    <!-- Grid column -->
    <div class="col-lg-5">
      <!--Image-->
      <img src="https://mdbootstrap.com/img/Photos/Others/images/82.jpg" alt="Sample project image" class="img-fluid rounded z-depth-1">
    </div>
    <!-- Grid column -->

  </div>
  <!-- Grid row -->

</section>
<!-- Projects section v.3 -->
*/
  }
}
export default Project;

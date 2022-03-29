import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <main id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full" data-sidebar-position="absolute"
          data-header-position="absolute" data-boxed-layout="full">
          <header class="topbar" data-navbarbg="skin5">
              <nav class="navbar top-navbar navbar-expand-md navbar-dark">
                  <figure class="navbar-header" data-logobg="skin5">
                      <a class="navbar-brand" href="index.html">
                          <span class="logo-icon">
                              <img src="../assets/images/logo-light-icon.png" alt="homepage" class="light-logo" />
                          </span>
                          <span class="logo-text">
                              <img src="../assets/images/logo-light-text.png" class="light-logo" alt="homepage" />
                          </span>
                      </a>
                  </figure>
                    <div class="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
                      <ul class="navbar-nav float-left mr-auto">
                          <li class="nav-item search-box">
                              <a class="nav-link waves-effect waves-dark" href="javascript:void(0)">
                                  <i class="ti-search"></i>
                              </a>
                              <form class="app-search position-absolute">
                                  <input type="text" class="form-control" placeholder="Search &amp; enter"/>
                                  <a class="srh-btn">
                                      <i class="ti-close"></i>
                                  </a>
                              </form>
                          </li>
                      </ul>
                      <ul class="navbar-nav float-right">
                          <li class="nav-item dropdown">
                              <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic" href="" data-toggle="dropdown" aria-haspopup="true"
                                  aria-expanded="false">
                                  <figure>
                                      <img src="../assets/images/users/1.jpg" alt="user" class="rounded-circle" width="31"/>
                                  </figure>
                              </a>
                              <div class="dropdown-menu dropdown-menu-right user-dd animated">
                                  <a class="dropdown-item" href="profile.html">
                                      <i class="ti-user m-r-5 m-l-5"></i> My Profile</a>
                              </div>
                          </li>
                      </ul>
                  </div>
              </nav>
          </header>
          <aside class="left-sidebar" data-sidebarbg="skin6">
              <div class="scroll-sidebar">
                  <nav class="sidebar-nav">
                      <ul id="sidebarnav">
                          <li>
                              <div class="user-profile d-flex no-block dropdown m-t-20">
                                  <figure class="user-pic">
                                      <img src="../assets/images/users/1.jpg" alt="users" class="rounded-circle" width="40" />
                                  </figure>
                                  <div class="user-content hide-menu m-l-10">
                                      <a href="javascript:void(0)" class="" id="Userdd" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          <h5 class="m-b-0 user-name font-medium">Steave Jobs
                                              <i class="fa fa-angle-down"></i>
                                          </h5>
                                          <span class="op-5 user-email">steave@gmail.com</span>
                                      </a>
                                      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="Userdd">
                                          <a class="dropdown-item" href="profile.html">
                                              <i class="ti-user m-r-5 m-l-5"></i> My Profile</a>
                                      </div>
                                  </div>
                              </div>
                          </li>
                          <li class="sidebar-item">
                              <a class="sidebar-link waves-effect waves-dark sidebar-link" href="index.html" aria-expanded="false">
                                  <i class="mdi mdi-view-dashboard"></i>
                                  <span class="hide-menu">Dashboard</span>
                              </a>
                          </li>
                          <li class="sidebar-item">
                              <a class="sidebar-link waves-effect waves-dark sidebar-link" href="profile.html" aria-expanded="false">
                                  <i class="mdi mdi-account-network"></i>
                                  <span class="hide-menu">Profile</span>
                              </a>
                          </li>
                      </ul>
                  </nav>
              </div>
          </aside>
          <section class="page-wrapper">
              <div class="page-breadcrumb">
                  <section class="row align-items-center">
                      <section class="col-5">
                          <h4 class="page-title">Dashboard</h4>
                          <div class="d-flex align-items-center">
                              <nav aria-label="breadcrumb">
                                  <ol class="breadcrumb">
                                      <li class="breadcrumb-item">
                                          <a href="index.html">Home</a>
                                      </li>
                                      <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                                  </ol>
                              </nav>
                          </div>
                      </section>
                  </section>
              </div>
              <section class="container-fluid">
                  <section class="row">
                      <section class="col-md-6">
                          <div class="card">
                              <div class="card-body">
                                  <div>
                                      <h4 class="card-title">Sales Summary</h4>
                                      <h5 class="card-subtitle">Overview of Latest Month</h5>
                                  </div>
                                  <div>
                                      <figure class="campaign ct-charts"></figure>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section class="col-md-6">
                          <div class="card">
                              <div class="card-body">
                                  <div>
                                      <div>
                                          <h4 class="card-title">Add Products</h4>
                                      </div>
                                  </div>
                                  <div>
                                      <form action="">
                                          <div class="form-group">
                                              <label for="products">Products</label>
                                              <input type="email" class="form-control" id="products"/>
                                          </div>
                                          <div class="form-group">
                                              <label for="license">License</label>
                                              <input type="text" class="form-control" id="license"/>
                                          </div>
                                          <div class="form-group">
                                              <label for="supportAgent">Support Agent</label>
                                              <input type="text" class="form-control" id="supportAgent"/>
                                          </div>
                                          <button type="submit" class="btn btn-success">Add</button>
                                      </form>
                                  </div>
                              </div>
                          </div>
                      </section>
                  </section>
                  <section class="row">
                      <section class="col-md-6">
                          <div class="card">
                              <div class="card-body">
                                  <div>
                                      <div>
                                          <h4 class="card-title">Recent Comments</h4>
                                      </div>
                                  </div>
                                  <article class="comment-widgets scrollable">
                                      <div class="d-flex flex-row comment-row m-t-0" data-toggle="modal" data-target="#myModal">
                                          <figure class="p-2">
                                              <img src="../assets/images/users/1.jpg" alt="user" width="50" class="rounded-circle"/>
                                          </figure>
                                          <div class="comment-text w-100">
                                              <h6 class="font-medium">James Anderson</h6>
                                              <span class="m-b-15 d-block">Lorem Ipsum is simply dummy text of the printing
                                                  and type setting industry. </span>
                                              <div class="comment-footer">
                                                  <span class="text-muted float-right">April 14, 2016</span>
                                                  <span class="label label-rounded label-primary">Pending</span>
                                                  <span class="action-icons">
                                                      <a href="javascript:void(0)">
                                                          <i class="ti-pencil-alt"></i>
                                                      </a>
                                                      <a href="javascript:void(0)">
                                                          <i class="ti-check"></i>
                                                      </a>
                                                      <a href="javascript:void(0)">
                                                          <i class="ti-heart"></i>
                                                      </a>
                                                  </span>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="d-flex flex-row comment-row">
                                          <figure class="p-2">
                                              <img src="../assets/images/users/4.jpg" alt="user" width="50" class="rounded-circle"/>
                                          </figure>
                                          <div class="comment-text active w-100">
                                              <h6 class="font-medium">Michael Jorden</h6>
                                              <span class="m-b-15 d-block">Lorem Ipsum is simply dummy text of the printing
                                                  and type setting industry. </span>
                                              <div class="comment-footer ">
                                                  <span class="text-muted float-right">April 14, 2016</span>
                                                  <span class="label label-success label-rounded">Approved</span>
                                                  <span class="action-icons active">
                                                      <a href="javascript:void(0)">
                                                          <i class="ti-pencil-alt"></i>
                                                      </a>
                                                      <a href="javascript:void(0)">
                                                          <i class="icon-close"></i>
                                                      </a>
                                                      <a href="javascript:void(0)">
                                                          <i class="ti-heart text-danger"></i>
                                                      </a>
                                                  </span>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="d-flex flex-row comment-row">
                                          <figure class="p-2">
                                              <img src="../assets/images/users/5.jpg" alt="user" width="50" class="rounded-circle"/>
                                          </figure>
                                          <div class="comment-text w-100">
                                              <h6 class="font-medium">Johnathan Doeting</h6>
                                              <span class="m-b-15 d-block">Lorem Ipsum is simply dummy text of the printing
                                                  and type setting industry. </span>
                                              <div class="comment-footer">
                                                  <span class="text-muted float-right">April 14, 2016</span>
                                                  <span class="label label-rounded label-danger">Rejected</span>
                                                  <span class="action-icons">
                                                      <a href="javascript:void(0)">
                                                          <i class="ti-pencil-alt"></i>
                                                      </a>
                                                      <a href="javascript:void(0)">
                                                          <i class="ti-check"></i>
                                                      </a>
                                                      <a href="javascript:void(0)">
                                                          <i class="ti-heart"></i>
                                                      </a>
                                                  </span>
                                              </div>
                                          </div>
                                      </div>
                                  </article>
                              </div>
                          </div>
                      </section>
                      <section class="col-md-6">
                          <div class="card">
                              <div class="card-body">
                                  <div class="d-md-flex align-items-center">
                                      <div>
                                          <h4 class="card-title">Top Selling Products</h4>
                                          <h5 class="card-subtitle">Overview of Top Selling Items</h5>
                                      </div>
                                      <div class="ml-auto">
                                          <input type="text" class="form-control" placeholder="Search" id="search"/>
                                      </div>
                                      <div class="search-button">
                                          <button type="submit" class="btn btn-success"><i class="ti-search"></i></button>
                                      </div>
                                      <div>
                                          <div class="dl">
                                              <select class="custom-select">
                                                  <option value="0" selected>Monthly</option>
                                                  <option value="1">Daily</option>
                                                  <option value="2">Weekly</option>
                                                  <option value="3">Yearly</option>
                                              </select>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="table-responsive">
                                      <table class="table v-middle">
                                          <thead>
                                              <tr class="bg-light">
                                                  <th class="border-top-0">Products</th>
                                                  <th class="border-top-0">License</th>
                                                  <th class="border-top-0">Support Agent</th>
                                                  <th class="border-top-0"></th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr>
                                                  <td>
                                                      <div class="d-flex align-items-center">
                                                          <div class="m-r-10">
                                                              <a class="btn btn-circle btn-info text-white">EA</a>
                                                          </div>
                                                          <div class="">
                                                              <h4 class="m-b-0 font-16">Elite Admin</h4>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td>Single Use</td>
                                                  <td>John Doe</td>
                                                  <td>
                                                      <label class="label label-success">Edit</label>
                                                      <label class="label label-danger">Delete</label>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div class="d-flex align-items-center">
                                                          <div class="m-r-10">
                                                              <a class="btn btn-circle btn-orange text-white">MA</a>
                                                          </div>
                                                          <div class="">
                                                              <h4 class="m-b-0 font-16">Monster Admin</h4>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td>Single Use</td>
                                                  <td>Venessa Fern</td>
                                                  <td>
                                                      <label class="label label-success">Edit</label>
                                                      <label class="label label-danger">Delete</label>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div class="d-flex align-items-center">
                                                          <div class="m-r-10">
                                                              <a class="btn btn-circle btn-success text-white">MP</a>
                                                          </div>
                                                          <div class="">
                                                              <h4 class="m-b-0 font-16">Material Pro Admin</h4>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td>Single Use</td>
                                                  <td>John Doe</td>
                                                  <td>
                                                      <label class="label label-success">Edit</label>
                                                      <label class="label label-danger">Delete</label>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <div class="d-flex align-items-center">
                                                          <div class="m-r-10">
                                                              <a class="btn btn-circle btn-purple text-white">AA</a>
                                                          </div>
                                                          <div class="">
                                                              <h4 class="m-b-0 font-16">Ample Admin</h4>
                                                          </div>
                                                      </div>
                                                  </td>
                                                  <td>Single Use</td>
                                                  <td>John Doe</td>
                                                  <td>
                                                      <label class="label label-success">Edit</label>
                                                      <label class="label label-danger">Delete</label>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>
                              </div>
                          </div>
                      </section>
                  </section>
              </section>
              <section>test Changes made by febin to check the commit
              </section>
              <footer class="footer text-center">
                  All Rights Reserved by Xtreme Admin.</footer>
          </section>
      </main>
    );
  }
}

export default App;

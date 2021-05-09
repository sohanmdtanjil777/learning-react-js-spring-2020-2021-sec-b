@extends('layout.main')

@section('main_content')
<div class="container">
    <div class="main-body">
    
          <!-- Breadcrumb -->
          <!-- /Breadcrumb -->
    
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card2">
                <div class="card-body2">
                  <div class="d-flex flex-column align-items-center text-center">

                  	@foreach($msps_dash as $info)

                    <img src="{{asset('/all_users_photo')}}/{{$info['image']}}" alt="Admin" class="rounded-circle" width="150">
                    <div class="mt-3">

                    	
                      <h4>{{ $info->user_name }}</h4>
                                                     
                      
                      <p class="text-muted font-size-sm" style="font-size: 20px;">Blood Type::{{ $info->blood_type }}</p>
                      <button class="btn btn-primary">Follow</button>
                      <button class="btn btn-primary">Message</button>
                                                     
                    </div>
                  </div>
                </div>
              </div>
              <div class="card2 mt-3">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0" style="font-size: 15px;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                    <span class="text-secondary" >www.e-healthcare.com</span>
                  </li>

                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0" style="font-size: 15px;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                    <span class="text-secondary">Facebook.com/E-health Care Centre</span>
                  </li>
                </ul>
              </div>
            </div>


            <div class="col-md-8">
              <div class="card2 mb-3">
                <div class="card-body2">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0" style="font-size: 15px;">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {{ $info->full_name }}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0" style="font-size: 15px;">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                     
                     {{$info->email}}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0" style="font-size: 15px;">Date OF Birth</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {{ $info->dob }}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0" style="font-size: 15px;">Gender</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {{ $info->gender }}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0" style="font-size: 15px;"15>National Id Card No:</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                     {{ $info->nid }}
                    </div>
                  </div>
                </div>
              </div>


              <div class="row gutters-sm">
                <div class="col-sm-6 mb-3">
                  <div class="card2 h-100">
                    <div class="card-body2">
                      <h6 class="d-flex align-items-center mb-3"><i style="font-size: 20px;" class="material-icons text-info mr-2">Blood Donation Status:</i></h6>

                      <div class="card-body2">
                      <h6 class="d-flex align-items-center mb-3"><i style="font-size: 20px;" class="material-icons text-info mr-2">N/A</i></h6>

                      
                      
                    </div>
                      
                      
                    </div>
                  </div>
                </div>


                <div class="col-sm-6 mb-3">
                  <div class="card2 h-100">
                    <div class="card-body2">
                      <h6 class="d-flex align-items-center mb-3"><i style="font-size: 20px;" class="material-icons text-info mr-2">Contect No :</i></h6>
                       
                       <div class="card-body2">
                      <h6 class="d-flex align-items-center mb-3"><i style="font-size: 20px;" class="material-icons text-info mr-2">{{ $info->contact }}</i></h6>

                                                       @endforeach

                      
                      
                    </div>
                      
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
@endsection


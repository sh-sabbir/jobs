<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    //return view('welcome');
    return redirect('/login');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::post('/logout', 'Auth\LoginController@userlogout')->name('user.logout');

Route::get('/verify','Auth\RegisterController@verifyEmail')->name('user.verify-email');
Route::get('/verify/{email}/{token}', 'Auth\RegisterController@emailSent')->name('email.sent.user');

Route::resource('admin/tags/price', 'PostPriceController', [
    'names' => [
        'index' => 'admin.jobs.price'
    ]
]);
Route::resource('admin/tags/duration', 'PostDurationController', [
    'names' => [
        'index' => 'admin.jobs.duration'
    ]
]);
Route::resource('admin/tags/format', 'PostFormatController', [
    'names' => [
        'index' => 'admin.jobs.format'
    ]
]);

Route::group(['prefix' => 'admin'], function () {

    // Login routes
    Route::get('/', 'AdminController@index')->name('admin.dashboard');
    Route::get('/login', 'Auth\AdminLoginController@showLoginForm')->name('admin.login');
    Route::post('/login', 'Auth\AdminLoginController@submitLogin')->name('admin.login.submit');
    Route::post('/logout', 'Auth\AdminLoginController@logout')->name('admin.logout');


    // Password reset routes
    Route::get('/password/reset', 'Auth\AdminForgotPasswordController@showLinkRequestForm')->name('admin.password.request');
    Route::get('/password/reset/{token}', 'Auth\AdminResetPasswordController@showResetForm')->name('admin.password.reset');
    Route::post('/password/reset', 'Auth\AdminResetPasswordController@reset');
    Route::post('/password/email', 'Auth\AdminForgotPasswordController@sendResetLinkEmail')->name('admin.password.email');

    // JOBS
    Route::get('/jobs', 'AdminController@showUserJobs')->name('admin.jobs');
    Route::get('/jobs/{job}', 'AdminController@show')->name('admin.index-post');
    Route::patch('/jobs/approve/{job}', 'AdminController@postApprove');
    Route::patch('/jobs/reject/{job}', 'AdminController@postDisapprove');

    // Users
    Route::get('/users', 'AdminController@showUsers')->name('admin.users');


});


Route::group(['prefix' => 'user'], function () {
    // Route::get('/posts', 'PostController@showUserPost')->name('user.posts');
    //Route::get('/dashboard','HomeController@dashboard')->name('user.dashboard');
    Route::get('/{user}/posts', 'PostController@index')->name('user.posts');
    Route::get('/my-jobs', 'PostController@index')->name('user.my-jobs');
    Route::get('/post/{post}', 'PostController@show')->name('user.index-post');
    Route::get('/new-job', 'PostController@create')->name('user.create-post');
    //Route::get('/posts/create', 'PostController@create')->name('user.create-post');
    Route::post('/post/create', 'PostController@store');
    Route::get('post/{post}/edit', 'PostController@edit')->name('user.edit-post');
    Route::patch('post/{post}/edit', 'PostController@update');
    Route::delete('post/{post}/edit', 'PostController@destroy');
});


//Route for profile
Route::resource('/profile', 'ProfileController', [
    'names' => [
        'index' => 'user.profile'
    ]
]);




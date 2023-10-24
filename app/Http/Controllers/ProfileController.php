<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User; // Import the User model
use Storage; // Import the Storage facade for file storage
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class ProfileController extends Controller
{
    public function index(Request $request)
    {
        return $request->user()->only(['name', 'email', 'image']);
    }
//     public function show($id)
//     {
//         $user = User::find($id);
//         return view('profile.show', ['user' => $user]);
//     }

//     public function edit($id)
//     {
//         $user = User::find($id);
//         return view('profile.edit', ['user' => $user]);
//     }

//     public function update(Request $request, $id)
//     {
//         $user = User::find($id);

//         // Validate the form data, including image upload
//         $this->validate($request, [
//             'name' => 'required|string|max:255',
//             'email' => 'required|email|unique:users,email,' . $user->id,
//             'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048', // Example: Max 2MB and image file types
//         ]);

//         $user->name = $request->input('name');
//         $user->email = $request->input('email');

//         if ($request->hasFile('image')) {
//             $image = $request->file('image');
//             $path = $image->store('profile_images', 'public'); // Store the image in the 'public' disk under the 'profile_images' directory

//             // If you store image URLs in the database, update the user's image URL here
//             $user->image_url = 'storage/' . $path; // Update the path to match your configuration
//         }

//         $user->save();
        
//         return redirect()->route('profile.show', $user->id)
//             ->with('success', 'Profile updated successfully.');
//     }
//     private function saveImage($image)
//     {
//         // Check if image is valid base64 string
//         if (preg_match('/^data:image\/(\w+);base64,/', $image, $type)) {
            
//             $image = substr($image, strpos($image, ',') + 1);
//             // Get file extension
//             $type = strtolower($type[1]); // jpg, png, gif

//             // Check if file is an image
//             if (!in_array($type, ['jpg', 'jpeg', 'gif', 'png'])) {
//                 throw new \Exception('invalid image type');
//             }
//             $image = str_replace(' ', '+', $image);
//             $image = base64_decode($image);

//             if ($image === false) {
//                 throw new \Exception('base64_decode failed');
//             }
//         } else {
//             throw new \Exception('did not match data URI with image data');
//         }

//         $dir = 'images/';
//         $file = Str::random() . '.' . $type;
//         $absolutePath = public_path($dir);
//         $relativePath = $dir . $file;
//         if (!File::exists($absolutePath)) {
//             File::makeDirectory($absolutePath, 0755, true);
//         }
//         file_put_contents($relativePath, $image);

//         return $relativePath;
//     }

}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;

class ContactController extends Controller
{
    
    public function sendContactForm(Request $request)
    
    {
        $validateDate = $request->validate([
            'fullName' => 'required|string|max:225',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:225',
            'message'=> 'required|string',
        ]);
        
        //Here, you will send an email, store the data in the database, etc.
        //for example sendings email:

            Mail::send([], [], function($message) use ($validateData)
            {
                $message->to('your-email@example.com')
                ->subject($validateData['subject'])
                ->setBody($validateData['message'], 'text/html');
                $message->from($validateData['email'], $validateData['fullName']);
                
                
            });
            
            return response()->json(['success'=>'message sent successfully'], 200);
            
    }
    
}
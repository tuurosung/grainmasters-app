<?php

namespace App;

trait HandleReturns
{
    public function handleError($message)
    {
        return redirect()->back()->with('error', $message);
    }

    public function handleSuccess($message)
    {
        return redirect()->back()->with('success', $message);
    }
}

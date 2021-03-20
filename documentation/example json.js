
{ 
    "message": result,
    "data": data
}
//  newaccount

{
    "name": name,
    "username": username,
    "email": email,
    "password": password
}

{ 
    "message": "failure" 
}
{ 
    "message": result,
    "data": { "user_id": 0 }
}

// login

{
    "username": username,
    "password": password
}

{ 
    "message": "success",
    "data": { 
        "user_id": id 
    }
}

// profile

{
    "user_id": user_id
}

{ 
    "message": "success",
    "data": { 
        "name": name,
        "username": username,
        "email": email,
        "business_id": business_id
    }
}

// linkbusiness

{
    "user_id": user_id,
    "business_id": business_id
}
{ 
    "message": "success"
}

// newbusiness
{
    "name": name,
    "email": email,
    "address": address,
    "postcode": postcode,
    "description": description
}
{ 
    "message": "success",
    "data": { 
        "business_id": id 
    }
}

// business profile

{
    "business_id": business_id
}
{ 
    "message": "success",
    "data": { 
        "name": name,
        "email": email,
        "address": address,
        "postcode": postcode,
        "description": description
    }
}

// addreview
{
    "business_id": business_id,
    "user_id": user_id,
    "text": text,
    "scores": {
        "oneway": oneway,
        "sanitizer": sanitizer,
        "mask_usage": mask_usage,
        "bouncers": bouncers,
        "temperature_checking": temperature_checking,
        "staff_ppe": staff_ppe,
        "social_distancing": social_distancing,
        "ventilation": ventilation
    }
}

{ 
    "message": "success",
    "data": { 
        "review_id": id 
    }
}

// getreviews

{
    "user_id": user_id,
    "business_id": null
}
{
    "user_id": null,
    "business_id": business_id
}

{ 
    "message": "success",
    "data": reviews
}
{   
    "review_id": review_id,
    "business_id": business_id,
    "user_id": user_id,
    "text": text,
    "oneway": oneway,
    "sanitizer": sanitizer,
    "mask_usage": mask_usage,
    "bouncers": bouncers,
    "temperature_checking": temperature_checking,
    "staff_ppe": staff_ppe,
    "social_distancing": social_distancing,
    "ventilation": ventilation
}
*After registration mail is send for activation &
 we are directed to setpassword page

*There firstly we do token verification API call
    - get params using useParams(), 
    make async func. verifyToken() and use useEffect() to call that func.
    - after geting token verified user see form and fill and submit then we'll call set-password API to activate user

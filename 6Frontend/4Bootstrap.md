# Bootstrap
[ getbootstrap.com ]

- Using bootstrap 3 ways
    - using CDN (We can use in plain HTML)
    - manual Download
    - using package managers (like npm, yarn, etc)

- add bootstrap css above custom css file

- Bootstrap works in grid layout structure
            Column  Column  Column
    Row     cell    cell    cell
    Row     cell    cell    cell

- It's easy using it you have to analyze pattern

- container|container-fluid
    - row
        - column(col)
  
- device breakpoints for responsiveness
    default 
    small   sm  mobile
    medium  md  large mobile, tablet
    large   lg  ipad, tabs, lap
    xlarge  xl  laptops
    xxlarge xxl monitors

- Grid col
    - row => 12 equal cols ie 8.86% (default)
    - col-sm-1 to col-sm-12 (col-sm-1 =>8.86%)
    - After columns width reached 100% next col is thrown to next row


- image classes -> img, img-fluid, img-thumbnail
- color classes -> text-dark/white/success/danger/warning/info/secondary

- Bootstrap gives us most of classes but some we have write custom (eg border)
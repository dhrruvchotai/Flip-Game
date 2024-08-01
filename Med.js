let deviceWidth = window.innerWidth;
let icons;


if(deviceWidth <= 768){

    icons = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="75" height="75" color="#000000" fill="none"><path d="M6 22V13.6944C6 12.1287 6 11.3459 6.21454 10.6077C6.42908 9.86948 6.84589 9.21812 7.6795 7.91542L10.3359 3.76419C11.0885 2.58806 11.4648 2 12 2C12.5352 2 12.9115 2.58806 13.6641 3.76419L16.3205 7.91542C17.1541 9.21812 17.5709 9.86948 17.7855 10.6077C18 11.3459 18 12.1287 18 13.6944V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M7 11C7.63152 11.3231 8.4887 11.9732 9.28009 11.9991C10.2988 12.0324 10.9868 11.1372 12 11.1372C13.0132 11.1372 13.7012 12.0324 14.7199 11.9991C15.5113 11.9732 16.3685 11.3231 17 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M12 12L12 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M10 5H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>'
        ,
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="75" height="75" color="#000000" fill="none"><path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /><path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /></svg>'
        ,
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="75" height="75" color="#000000" fill="none"><path d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z" stroke="currentColor" stroke-width="1.5" /><path d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z" stroke="currentColor" stroke-width="1.5" /></svg>'
        ,
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="75" height="75" color="#000000" fill="none"><path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /><path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" stroke-width="1.5" /><path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>'
        ,
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="75" height="75" color="#000000" fill="none"><path d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>'
        ,
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="75" height="75" color="#000000" fill="none"><path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /></svg>'
        ,
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="75" height="80" color="#000000" fill="none"><path d="M7.32988 10.8464C6.49701 11.1966 5.56172 11.2999 4.66667 11.112C3.0702 10.7768 2 9.71696 2 8.05582V6.12853C2 4.12164 3.52567 2.97998 5.55556 3.00027C7.81057 3.0228 10.5 4.76372 10.5 7.50659V19.4167C10.5 19.961 10.5 20.2332 10.3969 20.4423C10.1069 21.0304 9.48561 21 8.91667 21C8.34772 21 7.72646 21.0304 7.43646 20.4423C7.33333 20.2332 7.33333 19.961 7.33333 19.4167V11.1048C7.33333 11.0161 7.33224 10.93 7.32988 10.8464ZM7.32988 10.8464L7.33333 10.845M7.32988 10.8464C7.29694 9.68177 7 8.50004 6 8.50004" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /><path d="M16.6701 10.8464C17.503 11.1965 18.4383 11.2999 19.3333 11.112C20.9298 10.7768 22 9.71694 22 8.0558V6.12851C22 4.12356 20.3874 2.98083 18.4444 3.00024C16.1894 3.02278 13.5 4.7637 13.5 7.50656V19.4167C13.5 19.961 13.5 20.2332 13.6031 20.4423C13.8931 21.0304 14.5144 21 15.0833 21C15.6523 21 16.2735 21.0304 16.5635 20.4423C16.6667 20.2332 16.6667 19.961 16.6667 19.4167V11.1048C16.6667 11.0161 16.6678 10.93 16.6701 10.8464ZM16.6701 10.8464L16.6667 10.845M16.6701 10.8464C16.7031 9.68175 17 8.50002 18 8.50002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /></svg>'
        ,
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="75" height="75" color="#000000" fill="none"><path d="M11.5 6C7.02166 6 4.78249 6 3.39124 7.17157C2 8.34315 2 10.2288 2 14C2 17.7712 2 19.6569 3.39124 20.8284C4.78249 22 7.02166 22 11.5 22C15.9783 22 18.2175 22 19.6088 20.8284C21 19.6569 21 17.7712 21 14C21 12.8302 21 11.8419 20.9585 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /><path d="M18.5 2L18.7579 2.69703C19.0961 3.61102 19.2652 4.06802 19.5986 4.40139C19.932 4.73477 20.389 4.90387 21.303 5.24208L22 5.5L21.303 5.75792C20.389 6.09613 19.932 6.26524 19.5986 6.59861C19.2652 6.93198 19.0961 7.38898 18.7579 8.30297L18.5 9L18.2421 8.30297C17.9039 7.38898 17.7348 6.93198 17.4014 6.59861C17.068 6.26524 16.611 6.09613 15.697 5.75792L15 5.5L15.697 5.24208C16.611 4.90387 17.068 4.73477 17.4014 4.40139C17.7348 4.06802 17.9039 3.61102 18.2421 2.69703L18.5 2Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /><path d="M15.5 12L16.7265 13.0572C17.2422 13.5016 17.5 13.7239 17.5 14C17.5 14.2761 17.2422 14.4984 16.7265 14.9428L15.5 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M7.5 12L6.27346 13.0572C5.75782 13.5016 5.5 13.7239 5.5 14C5.5 14.2761 5.75782 14.4984 6.27346 14.9428L7.5 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M12.5 11L10.5 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>'
    ]

}
else{
    
    icons = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="90" height="90" color="#000000" fill="none"><path d="M6 22V13.6944C6 12.1287 6 11.3459 6.21454 10.6077C6.42908 9.86948 6.84589 9.21812 7.6795 7.91542L10.3359 3.76419C11.0885 2.58806 11.4648 2 12 2C12.5352 2 12.9115 2.58806 13.6641 3.76419L16.3205 7.91542C17.1541 9.21812 17.5709 9.86948 17.7855 10.6077C18 11.3459 18 12.1287 18 13.6944V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M7 11C7.63152 11.3231 8.4887 11.9732 9.28009 11.9991C10.2988 12.0324 10.9868 11.1372 12 11.1372C13.0132 11.1372 13.7012 12.0324 14.7199 11.9991C15.5113 11.9732 16.3685 11.3231 17 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M12 12L12 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M10 5H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>'
        ,
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="90" height="90" color="#000000" fill="none"><path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /><path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /></svg>'
        ,
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="90" height="90" color="#000000" fill="none"><path d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z" stroke="currentColor" stroke-width="1.5" /><path d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z" stroke="currentColor" stroke-width="1.5" /></svg>'
        ,
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="90" height="90" color="#000000" fill="none"><path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /><path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" stroke-width="1.5" /><path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>'
        ,
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="90" height="90" color="#000000" fill="none"><path d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>'
        ,
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="90" height="90" color="#000000" fill="none"><path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /></svg>'
        ,
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="90" height="90" color="#000000" fill="none"><path d="M15.5008 17.75L16.7942 19.5205C16.9156 19.7127 17.1489 19.7985 17.3619 19.7224C18.1657 19.4353 20.158 18.6572 21.7984 17.4725C21.9263 17.3801 22.0002 17.2261 21.9992 17.0673C21.9992 8.25 19.5008 5.75 19.5008 5.75C19.5008 5.75 17.5008 4.60213 15.3547 4.25602C15.1436 4.22196 14.9368 4.33509 14.8429 4.52891L14.3979 5.44677C14.3979 5.44677 13.2853 5.21397 12 5.21397C10.7147 5.21397 9.6021 5.44677 9.6021 5.44677L9.15711 4.52891C9.06314 4.33509 8.85644 4.22196 8.64529 4.25602C6.50079 4.60187 4.50079 5.75 4.50079 5.75C4.50079 5.75 2.0008 8.25 2.0008 17.0673C1.9998 17.2261 2.07365 17.3801 2.20159 17.4725C3.84196 18.6572 5.8343 19.4353 6.63806 19.7224C6.85105 19.7985 7.08437 19.7127 7.20582 19.5205L8.50079 17.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M17.5008 16.75C17.5008 16.75 15.2057 18.25 12.0008 18.25C8.79587 18.25 6.50079 16.75 6.50079 16.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M17.2508 12.25C17.2508 13.3546 16.4673 14.25 15.5008 14.25C14.5343 14.25 13.7508 13.3546 13.7508 12.25C13.7508 11.1454 14.5343 10.25 15.5008 10.25C16.4673 10.25 17.2508 11.1454 17.2508 12.25Z" stroke="currentColor" stroke-width="1.5" /><path d="M10.2508 12.25C10.2508 13.3546 9.46729 14.25 8.50079 14.25C7.5343 14.25 6.75079 13.3546 6.75079 12.25C6.75079 11.1454 7.5343 10.25 8.50079 10.25C9.46729 10.25 10.2508 11.1454 10.2508 12.25Z" stroke="currentColor" stroke-width="1.5" /></svg>'
        ,
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="90" height="90" color="#000000" fill="none"><path d="M21.25 5.5C20.8358 5.5 20.5 5.16421 20.5 4.75C20.5 4.33579 20.8358 4 21.25 4C21.6642 4 22 4.33579 22 4.75C22 5.16421 21.6642 5.5 21.25 5.5ZM21.25 5.5V9.25C21.25 9.94778 21.25 10.2967 21.1639 10.5806C20.97 11.2198 20.4698 11.72 19.8306 11.9139C19.5467 12 19.1978 12 18.5 12" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /><path d="M2.75 18.5C3.16421 18.5 3.5 18.8358 3.5 19.25C3.5 19.6642 3.16421 20 2.75 20C2.33579 20 2 19.6642 2 19.25C2 18.8358 2.33579 18.5 2.75 18.5ZM2.75 18.5L2.75 14.75C2.75 14.0522 2.75 13.7033 2.83612 13.4194C3.03002 12.7802 3.53023 12.28 4.16943 12.0861C4.45333 12 4.80222 12 5.5 12" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /><path d="M5.5 2.75C5.5 3.16421 5.16421 3.5 4.75 3.5C4.33579 3.5 4 3.16421 4 2.75C4 2.33579 4.33579 2 4.75 2C5.16421 2 5.5 2.33579 5.5 2.75ZM5.5 2.75L9.25 2.75C9.94778 2.75 10.2967 2.75 10.5806 2.83612C11.2198 3.03002 11.72 3.53023 11.9139 4.16943C12 4.45333 12 4.80222 12 5.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /><path d="M18.5 21.25C18.5 20.8358 18.8358 20.5 19.25 20.5C19.6642 20.5 20 20.8358 20 21.25C20 21.6642 19.6642 22 19.25 22C18.8358 22 18.5 21.6642 18.5 21.25ZM18.5 21.25L14.75 21.25C14.0522 21.25 13.7033 21.25 13.4194 21.1639C12.7802 20.97 12.28 20.4698 12.0861 19.8306C12 19.5467 12 19.1978 12 18.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /><path d="M5.54883 11.9512C5.54883 8.88704 5.54883 7.35498 6.50073 6.40307C7.45263 5.45117 8.9847 5.45117 12.0488 5.45117C15.113 5.45117 16.645 5.45117 17.5969 6.40307C18.5488 7.35498 18.5488 8.88704 18.5488 11.9512C18.5488 15.0153 18.5488 16.5474 17.5969 17.4993C16.645 18.4512 15.113 18.4512 12.0488 18.4512C8.9847 18.4512 7.45263 18.4512 6.50073 17.4993C5.54883 16.5474 5.54883 15.0153 5.54883 11.9512Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /><path d="M12.499 14.5L11.0384 9.97891C10.9465 9.69466 10.6648 9.5 10.3452 9.5C10.0256 9.5 9.74382 9.69466 9.65199 9.97891L8.19133 14.5M14.9989 9.5V14.5M8.72979 13H11.9606" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>'
        ,
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="90" height="90" color="#000000" fill="none"><path d="M20.5 16.9286V10C20.5 6.22876 20.5 4.34315 19.3284 3.17157C18.1569 2 16.2712 2 12.5 2H11.5C7.72876 2 5.84315 2 4.67157 3.17157C3.5 4.34315 3.5 6.22876 3.5 10V19.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /><path d="M20.5 17H6C4.61929 17 3.5 18.1193 3.5 19.5C3.5 20.8807 4.61929 22 6 22H20.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /><path d="M20.5 22C19.1193 22 18 20.8807 18 19.5C18 18.1193 19.1193 17 20.5 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /><path d="M12.3077 12L10.847 7.47891C10.7552 7.19466 10.4734 7 10.1538 7C9.83425 7 9.55249 7.19466 9.46066 7.47891L8 12M15 7V12M8.53846 10.5H11.7692" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>'
        ,
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="90" height="90" color="#000000" fill="none"><path d="M6.29358 4.83499L4.16511 17.6712C3.98586 18.7522 3.89623 19.2927 4.19427 19.6464C4.49231 20 5.03749 20 6.12785 20H6.53027C7.35308 20 7.76448 20 8.04501 19.7555C8.32554 19.5109 8.38372 19.1016 8.50008 18.2828L8.96761 14.9934C9.00457 14.7333 9.02305 14.6033 9.05213 14.492C9.26041 13.6948 9.93391 13.1077 10.7485 13.0132C10.8622 13 10.9929 13 11.2543 13H12.4163C15.5113 13 18.1943 10.8473 18.8803 7.81384C19.5536 4.83576 17.3016 2 14.2631 2H9.62312C8.5093 2 7.95239 2 7.51383 2.2348C7.26304 2.36907 7.04377 2.55577 6.87077 2.78235C6.56824 3.17856 6.47669 3.7307 6.29358 4.83499Z" stroke="currentColor" stroke-width="1.5" /><path d="M8.24315 19.4998L8.01451 20.8325C7.90978 21.4429 8.38532 21.9998 9.01128 21.9998H11.0018C11.4961 21.9998 11.9179 21.6464 11.9991 21.1642L12.7285 16.8354C12.8098 16.3533 13.2316 15.9998 13.7258 15.9998H15.5289C18.11 15.9998 20.3448 14.2267 20.9047 11.7345C21.2967 9.99004 20.4437 8.30993 19 7.50098" stroke="currentColor" stroke-width="1.5" /></svg>'
        ,
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="90" height="90" color="#000000" fill="none"><path d="M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z" stroke="currentColor" stroke-width="1.5" /><path d="M21.011 14.0965C21.5329 13.9558 21.7939 13.8854 21.8969 13.7508C22 13.6163 22 13.3998 22 12.9669V11.0332C22 10.6003 22 10.3838 21.8969 10.2493C21.7938 10.1147 21.5329 10.0443 21.011 9.90358C19.0606 9.37759 17.8399 7.33851 18.3433 5.40087C18.4817 4.86799 18.5509 4.60156 18.4848 4.44529C18.4187 4.28902 18.2291 4.18134 17.8497 3.96596L16.125 2.98673C15.7528 2.77539 15.5667 2.66972 15.3997 2.69222C15.2326 2.71472 15.0442 2.90273 14.6672 3.27873C13.208 4.73448 10.7936 4.73442 9.33434 3.27864C8.95743 2.90263 8.76898 2.71463 8.60193 2.69212C8.43489 2.66962 8.24877 2.77529 7.87653 2.98663L6.15184 3.96587C5.77253 4.18123 5.58287 4.28891 5.51678 4.44515C5.45068 4.6014 5.51987 4.86787 5.65825 5.4008C6.16137 7.3385 4.93972 9.37763 2.98902 9.9036C2.46712 10.0443 2.20617 10.1147 2.10308 10.2492C2 10.3838 2 10.6003 2 11.0332V12.9669C2 13.3998 2 13.6163 2.10308 13.7508C2.20615 13.8854 2.46711 13.9558 2.98902 14.0965C4.9394 14.6225 6.16008 16.6616 5.65672 18.5992C5.51829 19.1321 5.44907 19.3985 5.51516 19.5548C5.58126 19.7111 5.77092 19.8188 6.15025 20.0341L7.87495 21.0134C8.24721 21.2247 8.43334 21.3304 8.6004 21.3079C8.76746 21.2854 8.95588 21.0973 9.33271 20.7213C10.7927 19.2644 13.2088 19.2643 14.6689 20.7212C15.0457 21.0973 15.2341 21.2853 15.4012 21.3078C15.5682 21.3303 15.7544 21.2246 16.1266 21.0133L17.8513 20.034C18.2307 19.8187 18.4204 19.711 18.4864 19.5547C18.5525 19.3984 18.4833 19.132 18.3448 18.5991C17.8412 16.6616 19.0609 14.6226 21.011 14.0965Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /></svg>'
        ,
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="90" height="90" color="#000000" fill="none"><path d="M12 20.5C13.8097 20.5 15.5451 20.3212 17.1534 19.9934C19.1623 19.5839 20.1668 19.3791 21.0834 18.2006C22 17.0221 22 15.6693 22 12.9635V11.0365C22 8.33073 22 6.97787 21.0834 5.79937C20.1668 4.62088 19.1623 4.41613 17.1534 4.00662C15.5451 3.67877 13.8097 3.5 12 3.5C10.1903 3.5 8.45489 3.67877 6.84656 4.00662C4.83766 4.41613 3.83321 4.62088 2.9166 5.79937C2 6.97787 2 8.33073 2 11.0365V12.9635C2 15.6693 2 17.0221 2.9166 18.2006C3.83321 19.3791 4.83766 19.5839 6.84656 19.9934C8.45489 20.3212 10.1903 20.5 12 20.5Z" stroke="currentColor" stroke-width="1.5" /><path d="M15.9621 12.3129C15.8137 12.9187 15.0241 13.3538 13.4449 14.2241C11.7272 15.1705 10.8684 15.6438 10.1728 15.4615C9.9372 15.3997 9.7202 15.2911 9.53799 15.1438C9 14.7089 9 13.8059 9 12C9 10.1941 9 9.29112 9.53799 8.85618C9.7202 8.70886 9.9372 8.60029 10.1728 8.53854C10.8684 8.35621 11.7272 8.82945 13.4449 9.77593C15.0241 10.6462 15.8137 11.0813 15.9621 11.6871C16.0126 11.8933 16.0126 12.1067 15.9621 12.3129Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /></svg>'
        ,
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="90" height="90" color="#000000" fill="none"><path d="M2 18.5C3.76504 19.521 5.81428 20 8 20C14.4808 20 19.7617 14.8625 19.9922 8.43797L22 4.5L18.6458 5C17.9407 4.37764 17.0144 4 16 4C13.4276 4 11.5007 6.51734 12.1209 8.98003C8.56784 9.20927 5.34867 7.0213 3.48693 4.10523C2.25147 8.30185 3.39629 13.3561 6.5 16.4705C6.5 17.647 3.5 18.3488 2 18.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /></svg>'
        ,
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="90" height="90" color="#000000" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M8.00897 9L8 9M16 9L15.991 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>'
        ,
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="90" height="90" color="#000000" fill="none"><path d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z" stroke="currentColor" stroke-width="1.5" /><path d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z" stroke="currentColor" stroke-width="1.5" /><path d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /></svg>'
        ,
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="90" height="90" color="#000000" fill="none"><path d="M10 9.5L5.27531 4.47562C4.85705 4.02447 4.92403 3.69493 5.41729 3.40962C6.34454 2.87327 7.06689 2.8587 8.04428 3.39508L12.949 6.08672C13.2982 6.27833 13.6406 6.47256 14 6.57852" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M12.5 13.6632L14.6103 20.4696C14.7826 21.0255 15.086 21.1262 15.556 20.8567C16.4396 20.3501 16.7958 19.765 16.8197 18.7107L16.9395 13.4198C16.9555 12.7131 16.9526 12.0215 17.5 11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M8.32846 10.9842L10.2154 9.60554L14.6377 6.38133L14.6416 6.37848L14.6491 6.37298C14.7535 6.29658 16.3094 5.16235 17.1919 4.77578C18.2765 4.30064 19.2869 4.52153 20.3739 4.82512C20.9362 4.98215 21.2173 5.06066 21.4202 5.20714C21.742 5.43955 21.9513 5.79725 21.9943 6.18849C22.0215 6.43507 21.9498 6.71456 21.8065 7.27353L21.8065 7.27355C21.5294 8.35428 21.2181 9.32816 20.2588 10.0175C19.4782 10.5784 17.7045 11.341 17.5856 11.3918L17.5771 11.3955L17.5726 11.3974L12.5317 13.5644L10.3782 14.4875L10.3782 14.4876C9.5974 14.8223 9.207 14.9896 8.94139 15.3002C8.31933 16.0275 8.23148 17.3437 7.99931 18.2493C7.87101 18.7498 7.16748 19.617 6.54058 19.4868C6.15355 19.4065 6.14613 18.922 6.09796 18.6131L5.6342 15.6389C5.5233 14.9276 5.51479 14.913 4.94599 14.4626L2.56757 12.5792C2.32053 12.3836 1.89903 12.135 2.022 11.7641C2.22119 11.1633 3.33408 10.9957 3.83747 11.1363C4.74834 11.3907 5.94747 11.9737 6.89684 11.8058C7.3022 11.7341 7.64428 11.4841 8.32844 10.9842L8.32846 10.9842Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>'
        ,
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="90" height="90" color="#000000" fill="none"><path d="M7.32988 10.8464C6.49701 11.1966 5.56172 11.2999 4.66667 11.112C3.0702 10.7768 2 9.71696 2 8.05582V6.12853C2 4.12164 3.52567 2.97998 5.55556 3.00027C7.81057 3.0228 10.5 4.76372 10.5 7.50659V19.4167C10.5 19.961 10.5 20.2332 10.3969 20.4423C10.1069 21.0304 9.48561 21 8.91667 21C8.34772 21 7.72646 21.0304 7.43646 20.4423C7.33333 20.2332 7.33333 19.961 7.33333 19.4167V11.1048C7.33333 11.0161 7.33224 10.93 7.32988 10.8464ZM7.32988 10.8464L7.33333 10.845M7.32988 10.8464C7.29694 9.68177 7 8.50004 6 8.50004" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /><path d="M16.6701 10.8464C17.503 11.1965 18.4383 11.2999 19.3333 11.112C20.9298 10.7768 22 9.71694 22 8.0558V6.12851C22 4.12356 20.3874 2.98083 18.4444 3.00024C16.1894 3.02278 13.5 4.7637 13.5 7.50656V19.4167C13.5 19.961 13.5 20.2332 13.6031 20.4423C13.8931 21.0304 14.5144 21 15.0833 21C15.6523 21 16.2735 21.0304 16.5635 20.4423C16.6667 20.2332 16.6667 19.961 16.6667 19.4167V11.1048C16.6667 11.0161 16.6678 10.93 16.6701 10.8464ZM16.6701 10.8464L16.6667 10.845M16.6701 10.8464C16.7031 9.68175 17 8.50002 18 8.50002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /></svg>'
        ,
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="90" height="90" color="#000000" fill="none"><path d="M11.5 6C7.02166 6 4.78249 6 3.39124 7.17157C2 8.34315 2 10.2288 2 14C2 17.7712 2 19.6569 3.39124 20.8284C4.78249 22 7.02166 22 11.5 22C15.9783 22 18.2175 22 19.6088 20.8284C21 19.6569 21 17.7712 21 14C21 12.8302 21 11.8419 20.9585 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /><path d="M18.5 2L18.7579 2.69703C19.0961 3.61102 19.2652 4.06802 19.5986 4.40139C19.932 4.73477 20.389 4.90387 21.303 5.24208L22 5.5L21.303 5.75792C20.389 6.09613 19.932 6.26524 19.5986 6.59861C19.2652 6.93198 19.0961 7.38898 18.7579 8.30297L18.5 9L18.2421 8.30297C17.9039 7.38898 17.7348 6.93198 17.4014 6.59861C17.068 6.26524 16.611 6.09613 15.697 5.75792L15 5.5L15.697 5.24208C16.611 4.90387 17.068 4.73477 17.4014 4.40139C17.7348 4.06802 17.9039 3.61102 18.2421 2.69703L18.5 2Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /><path d="M15.5 12L16.7265 13.0572C17.2422 13.5016 17.5 13.7239 17.5 14C17.5 14.2761 17.2422 14.4984 16.7265 14.9428L15.5 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M7.5 12L6.27346 13.0572C5.75782 13.5016 5.5 13.7239 5.5 14C5.5 14.2761 5.75782 14.4984 6.27346 14.9428L7.5 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M12.5 11L10.5 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>'
        ];
    
}

    let totalSeconds = 0;
    let rowElmt1,colElmt1,rowElmt2,colElmt2;
    let count = 0;
    let flippedCards = "";
    let currentIconIndex = 0;
    let flippedCardRow;
    let flippedCardCol;
    let score = 0;
    let icons2d;
    let checkArr;

    if(deviceWidth <= 768){
        icons2d = Array.from({ length: 4 }, () => Array(4).fill(null));
        checkArr = Array.from({ length: 4 }, () => Array(4).fill(0));
    }
    else{
        icons2d = Array.from({ length: 6 }, () => Array(6).fill(null));
        checkArr = Array.from({ length: 6 }, () => Array(6).fill(0));
    }

    icons = shuffle(icons.concat(icons)); 


    firstFlippedRow = -1;
    firstFlippedCol = -1;

    if(deviceWidth <= 768){
        function assignCard(){
            for(i=0;i<4;i++){
                for(j=0;j<4;j++){
                icons2d[i][j] = icons[currentIconIndex];
                currentIconIndex++;
                }
            }
        }
    }
    else{
        function assignCard(){
            for(i=0;i<6;i++){
                for(j=0;j<6;j++){
                icons2d[i][j] = icons[currentIconIndex];
                currentIconIndex++;
                }
            }
        }
    }

    assignCard();
    displayTime();



    function shuffle(array) {
        let currentIndex = array.length;
        let randomIndex;
    
        while (currentIndex != 0) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];

        }

        return array;
    }



    function flip(row,col){

        let newBox1 = document.querySelector(`.myCard[data-row = '${row}'][data-col = '${col}']`);

        newBox1.classList.add('flipCard');
        newBox1.classList.remove('unflipCard');

        newBox1.innerHTML = icons2d[row][col];


        if(flippedCards == ""){ 
            
            flippedCardRow = row;
            flippedCardCol = col;

            firstFlippedRow = row;
            firstFlippedCol = col;

            flippedCards = newBox1.innerHTML;
            newBox1.setAttribute("onclick","unflip("+row+","+col+")");

        }
        else if(flippedCards == newBox1.innerHTML){

            newBox1.setAttribute("onclick","");

            newBox2 = document.querySelector(`.myCard[data-row = '${flippedCardRow}'][data-col = '${flippedCardCol}']`);

            newBox2.setAttribute("onclick", "");
            flippedCardCol = -1;
            flippedCardRow = -1;
            flippedCards="";

            score++;

            
            checkArr[firstFlippedRow][firstFlippedCol] = 1;
            checkArr[row][col] = 1;
            
            firstFlippedRow = -1;
            firstFlippedCol = -1;

            if(score == 18 || (deviceWidth <= 768 && score == 8)){
                
                if(localStorage.getItem('winCount')){
                    localStorage.setItem('winCount',parseInt(localStorage.getItem('winCount'))+1)
                }
                else{
                    localStorage.setItem('winCount',1);
                }

                setTimeout(() => {
                    Swal.fire({

                        title: "Hurrah!! You Won.",
                        imageUrl: "happy-dance.gif",
                        imageWidth: 250,
                        imageHeight: 200,

                        customClass: {
                            popup: 'custom-swal-popup',
                            title: 'custom-swal-title',
                            image: 'custom-swal-image',
                        },


                        showDenyButton: true,
                        confirmButtonText: "New Game",
                        denyButtonText: `Back`


                    }).then((result) => {
                        
                        if (result.isConfirmed) {
                            setTimeout(resetGame,2300);
                            let timerInterval;
                            Swal.fire({
                                title: "New Game!!!",
                                html: "New Game Starts in <b></b> milliseconds.",
                                timer: 2000,
                                timerProgressBar: true,
                                didOpen: () => {
                                    Swal.showLoading();
                                    const timer = Swal.getPopup().querySelector("b");
                                    timerInterval = setInterval(() => {
                                        timer.textContent = `${Swal.getTimerLeft()}`;
                                    }, 100);
                                },
                                willClose: () => {
                                    clearInterval(timerInterval);
                                }
                            }).then((result) => {

                                if (result.dismiss === Swal.DismissReason.timer) {
       
                                }
                                
                            });
        
                        }
                        else if (result.isDenied) {
                       
                            window.location.href = "./index.html";

                        }
        
                    });
                },700)
            
            }

        }
        else{

            setTimeout(() => {
                unflip(row,col);
                unflip(flippedCardRow,flippedCardCol);

            },500); 
        }

    }
    function unflip(row,col){

        flippedCards = "";

        let newBox3 = document.querySelector(`.myCard[data-row = '${row}'][data-col = '${col}']`);

        newBox3.innerHTML = "";

        newBox3.classList.remove('flipCard');
        newBox3.classList.add('unflipCard');

        newBox3.setAttribute("onclick","flip("+row+","+col+")");
    
    }

    function resetGame(){
        score = 0;
        let count = 0;
        let currentIconIndex = 0;
        icons = shuffle(icons.concat(icons)); 
        
        if(deviceWidth <= 768){
            checkArr = Array.from({ length: 4}, () => Array(4).fill(0));     
        }
        else{
            checkArr = Array.from({ length: 6 }, () => Array(6).fill(0));
        }
        

        if(deviceWidth <= 768){
            for(i=0;i<4;i++){
                for(j=0;j<4;j++){
                    unflip(i,j);
                    icons2d[i][j] = icons[currentIconIndex];
                    currentIconIndex++;
                }
            }
        }
        else{    
            for(i=0;i<6;i++){
                for(j=0;j<6;j++){
                    unflip(i,j);
                    icons2d[i][j] = icons[currentIconIndex];
                    currentIconIndex++;
                }
            }
        }

        totalSeconds = 0;
        displayTime();
        
    }

    
    
    function displayTime(){ 
        let interval = 0;
        let totalIntervals = 800;
        let increment = 100 / totalIntervals;


        function setTime() {

            totalSeconds += increment;
            if (totalSeconds >= 100) {
                document.querySelector(".line").style.width = "100%";

                
                clearInterval(interval);
                
                WonorLose();
            } 

            else {
                document.querySelector(".line").style.width = totalSeconds + "%";
            }
        }

        interval = setInterval(setTime, 100);
        setTime();
    }


    function WonorLose(){
        
        let decision = true;

        if(deviceWidth <= 768){

            for(i=0;i<4;i++){
                for(j=0;j<4;j++){
                    if(checkArr[i][j] == 0){
                        
                        decision = false;
    
                        if(localStorage.getItem('loseCount')){
                            localStorage.setItem('loseCount',parseInt(localStorage.getItem('loseCount'))+1)
                            console.log("Acccess.")
                        }
                        else{
                            localStorage.setItem('loseCount',1);
                        }
    
    
                        Swal.fire({
                            title: "Oops.. You Lose THE GAME.",
                            imageUrl: "crying-emoji.gif",
                            imageWidth: 200,
                            imageHeight: 190,
    
                            customClass: {
                                popup: 'custom-swal-popup',
                                title: 'custom-swal-title',
                            },
    
    
                            showDenyButton: true,
                            confirmButtonText: "New Game",
                            denyButtonText: `Back`
                            
                        }).then((result) => {
                            
                            if (result.isConfirmed) {
                                setTimeout(resetGame,2700);
                                let timerInterval;
                                Swal.fire({
                                    title: "New Game!!!",
                                    html: "New Game Starts in <b></b> milliseconds.",
                                    timer: 2000,
                                    timerProgressBar: true,
                                    didOpen: () => {
                                        Swal.showLoading();
                                        const timer = Swal.getPopup().querySelector("b");
                                        timerInterval = setInterval(() => {
                                            timer.textContent = `${Swal.getTimerLeft()}`;
                                        }, 100);
                                    },
                                    willClose: () => {
                                        clearInterval(timerInterval);
                                    }
                                }).then((result) => {
                                    
                                    if (result.dismiss === Swal.DismissReason.timer) {
                                    }
                                });
                            }
    
                            else{
                                window.location.href = "./index.html";
                            }
    
                        });

                        return;
                    }
                }
    
            }
        }
        else{

            for(i=0;i<6;i++){
                for(j=0;j<6;j++){
                    if(checkArr[i][j] == 0){
                        
                        decision = false;
    
                        if(localStorage.getItem('loseCount')){
                            localStorage.setItem('loseCount',parseInt(localStorage.getItem('loseCount'))+1)
                            console.log("Acccess.")
                        }
                        else{
                            localStorage.setItem('loseCount',1);
                        }
    
    
                        Swal.fire({
                            title: "Oops.. You Lose THE GAME.",
                            imageUrl: "crying-emoji.gif",
                            imageWidth: 350,
                            imageHeight: 300,
    
                            customClass: {
                                popup: 'custom-swal-popup',
                                title: 'custom-swal-title'
                            },
    
    
                            showDenyButton: true,
                            confirmButtonText: "New Game",
                            denyButtonText: `Back`
                            
                        }).then((result) => {
                            
                            if (result.isConfirmed) {
                                setTimeout(resetGame,2700);
                                let timerInterval;
                                Swal.fire({
                                    title: "New Game!!!",
                                    html: "New Game Starts in <b></b> milliseconds.",
                                    timer: 2000,
                                    timerProgressBar: true,
                                    didOpen: () => {
                                        Swal.showLoading();
                                        const timer = Swal.getPopup().querySelector("b");
                                        timerInterval = setInterval(() => {
                                            timer.textContent = `${Swal.getTimerLeft()}`;
                                        }, 100);
                                    },
                                    willClose: () => {
                                        clearInterval(timerInterval);
                                    }
                                }).then((result) => {
                                    
                                    if (result.dismiss === Swal.DismissReason.timer) {
                                    }
                                });
                            }
    
                            else{
                                window.location.href = "./index.html";
                            }
    
                        });
                        return;
                    }
                }
    
            }
        }

        if(decision){
            if(localStorage.getItem('winCount')){
                localStorage.setItem('winCount',parseInt(localStorage.getItem('winCount'))+1)
            }
            else{
                localStorage.setItem('winCount',1);
            }
        }

    }

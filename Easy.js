let deviceWidth = window.innerWidth;
let icons;
    if(deviceWidth <= 768){

        icons = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="80" height="80" color="#000000" fill="none"><path d="M6 22V13.6944C6 12.1287 6 11.3459 6.21454 10.6077C6.42908 9.86948 6.84589 9.21812 7.6795 7.91542L10.3359 3.76419C11.0885 2.58806 11.4648 2 12 2C12.5352 2 12.9115 2.58806 13.6641 3.76419L16.3205 7.91542C17.1541 9.21812 17.5709 9.86948 17.7855 10.6077C18 11.3459 18 12.1287 18 13.6944V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M7 11C7.63152 11.3231 8.4887 11.9732 9.28009 11.9991C10.2988 12.0324 10.9868 11.1372 12 11.1372C13.0132 11.1372 13.7012 12.0324 14.7199 11.9991C15.5113 11.9732 16.3685 11.3231 17 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M12 12L12 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M10 5H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>'
            ,
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="80" height="80" color="#000000" fill="none"><path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /><path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /></svg>'
            ,
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="80" height="80" color="#000000" fill="none"><path d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z" stroke="currentColor" stroke-width="1.5" /><path d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z" stroke="currentColor" stroke-width="1.5" /></svg>'
            ,
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="80" height="80" color="#000000" fill="none"><path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /><path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" stroke-width="1.5" /><path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>'
            ,
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="80" height="80" color="#000000" fill="none"><path d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>'
            ,
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="80" height="80" color="#000000" fill="none"><path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /></svg>'
        ];

    }
    else{
        icons = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" color="#000000" fill="none"><path d="M6 22V13.6944C6 12.1287 6 11.3459 6.21454 10.6077C6.42908 9.86948 6.84589 9.21812 7.6795 7.91542L10.3359 3.76419C11.0885 2.58806 11.4648 2 12 2C12.5352 2 12.9115 2.58806 13.6641 3.76419L16.3205 7.91542C17.1541 9.21812 17.5709 9.86948 17.7855 10.6077C18 11.3459 18 12.1287 18 13.6944V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M7 11C7.63152 11.3231 8.4887 11.9732 9.28009 11.9991C10.2988 12.0324 10.9868 11.1372 12 11.1372C13.0132 11.1372 13.7012 12.0324 14.7199 11.9991C15.5113 11.9732 16.3685 11.3231 17 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M12 12L12 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M10 5H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>'
            ,
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" color="#000000" fill="none"><path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /><path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /></svg>'
            ,
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" color="#000000" fill="none"><path d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z" stroke="currentColor" stroke-width="1.5" /><path d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z" stroke="currentColor" stroke-width="1.5" /></svg>'
            ,
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" color="#000000" fill="none"><path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /><path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" stroke-width="1.5" /><path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>'
            ,
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" color="#000000" fill="none"><path d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>'
            ,
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" color="#000000" fill="none"><path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /></svg>'
            ,
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" color="#000000" fill="none"><path d="M15.5008 17.75L16.7942 19.5205C16.9156 19.7127 17.1489 19.7985 17.3619 19.7224C18.1657 19.4353 20.158 18.6572 21.7984 17.4725C21.9263 17.3801 22.0002 17.2261 21.9992 17.0673C21.9992 8.25 19.5008 5.75 19.5008 5.75C19.5008 5.75 17.5008 4.60213 15.3547 4.25602C15.1436 4.22196 14.9368 4.33509 14.8429 4.52891L14.3979 5.44677C14.3979 5.44677 13.2853 5.21397 12 5.21397C10.7147 5.21397 9.6021 5.44677 9.6021 5.44677L9.15711 4.52891C9.06314 4.33509 8.85644 4.22196 8.64529 4.25602C6.50079 4.60187 4.50079 5.75 4.50079 5.75C4.50079 5.75 2.0008 8.25 2.0008 17.0673C1.9998 17.2261 2.07365 17.3801 2.20159 17.4725C3.84196 18.6572 5.8343 19.4353 6.63806 19.7224C6.85105 19.7985 7.08437 19.7127 7.20582 19.5205L8.50079 17.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M17.5008 16.75C17.5008 16.75 15.2057 18.25 12.0008 18.25C8.79587 18.25 6.50079 16.75 6.50079 16.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M17.2508 12.25C17.2508 13.3546 16.4673 14.25 15.5008 14.25C14.5343 14.25 13.7508 13.3546 13.7508 12.25C13.7508 11.1454 14.5343 10.25 15.5008 10.25C16.4673 10.25 17.2508 11.1454 17.2508 12.25Z" stroke="currentColor" stroke-width="1.5" /><path d="M10.2508 12.25C10.2508 13.3546 9.46729 14.25 8.50079 14.25C7.5343 14.25 6.75079 13.3546 6.75079 12.25C6.75079 11.1454 7.5343 10.25 8.50079 10.25C9.46729 10.25 10.2508 11.1454 10.2508 12.25Z" stroke="currentColor" stroke-width="1.5" /></svg>'
            ,
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" color="#000000" fill="none"><path d="M21.25 5.5C20.8358 5.5 20.5 5.16421 20.5 4.75C20.5 4.33579 20.8358 4 21.25 4C21.6642 4 22 4.33579 22 4.75C22 5.16421 21.6642 5.5 21.25 5.5ZM21.25 5.5V9.25C21.25 9.94778 21.25 10.2967 21.1639 10.5806C20.97 11.2198 20.4698 11.72 19.8306 11.9139C19.5467 12 19.1978 12 18.5 12" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /><path d="M2.75 18.5C3.16421 18.5 3.5 18.8358 3.5 19.25C3.5 19.6642 3.16421 20 2.75 20C2.33579 20 2 19.6642 2 19.25C2 18.8358 2.33579 18.5 2.75 18.5ZM2.75 18.5L2.75 14.75C2.75 14.0522 2.75 13.7033 2.83612 13.4194C3.03002 12.7802 3.53023 12.28 4.16943 12.0861C4.45333 12 4.80222 12 5.5 12" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /><path d="M5.5 2.75C5.5 3.16421 5.16421 3.5 4.75 3.5C4.33579 3.5 4 3.16421 4 2.75C4 2.33579 4.33579 2 4.75 2C5.16421 2 5.5 2.33579 5.5 2.75ZM5.5 2.75L9.25 2.75C9.94778 2.75 10.2967 2.75 10.5806 2.83612C11.2198 3.03002 11.72 3.53023 11.9139 4.16943C12 4.45333 12 4.80222 12 5.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /><path d="M18.5 21.25C18.5 20.8358 18.8358 20.5 19.25 20.5C19.6642 20.5 20 20.8358 20 21.25C20 21.6642 19.6642 22 19.25 22C18.8358 22 18.5 21.6642 18.5 21.25ZM18.5 21.25L14.75 21.25C14.0522 21.25 13.7033 21.25 13.4194 21.1639C12.7802 20.97 12.28 20.4698 12.0861 19.8306C12 19.5467 12 19.1978 12 18.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /><path d="M5.54883 11.9512C5.54883 8.88704 5.54883 7.35498 6.50073 6.40307C7.45263 5.45117 8.9847 5.45117 12.0488 5.45117C15.113 5.45117 16.645 5.45117 17.5969 6.40307C18.5488 7.35498 18.5488 8.88704 18.5488 11.9512C18.5488 15.0153 18.5488 16.5474 17.5969 17.4993C16.645 18.4512 15.113 18.4512 12.0488 18.4512C8.9847 18.4512 7.45263 18.4512 6.50073 17.4993C5.54883 16.5474 5.54883 15.0153 5.54883 11.9512Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /><path d="M12.499 14.5L11.0384 9.97891C10.9465 9.69466 10.6648 9.5 10.3452 9.5C10.0256 9.5 9.74382 9.69466 9.65199 9.97891L8.19133 14.5M14.9989 9.5V14.5M8.72979 13H11.9606" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>'
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
        icons2d = Array.from({ length: 4 }, () => Array(3).fill(null));
        checkArr = Array.from({ length: 4 }, () => Array(3).fill(0));
    }
    else{
        icons2d = Array.from({ length: 4 }, () => Array(4).fill(null));
        checkArr = Array.from({ length: 4 }, () => Array(4).fill(0));
    }

    icons = shuffle(icons.concat(icons)); 

    firstFlippedRow = -1;
    firstFlippedCol = -1;    


    function assignCard(){
        if(deviceWidth <= 768){
            for(i=0;i<4;i++){
                for(j=0;j<3;j++){
                icons2d[i][j] = icons[currentIconIndex];
                currentIconIndex++;
                }
            }
        }
        else{
            for(i=0;i<4;i++){
                for(j=0;j<4;j++){
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


            if(score == 8 || (deviceWidth <= 768 && score == 6)){
                
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
            checkArr = Array.from({ length: 4 }, () => Array(3).fill(0));
        }
        else{
            checkArr = Array.from({ length: 4 }, () => Array(4).fill(0));
        }

        
        if(deviceWidth <= 768){
            for(i=0;i<4;i++){
                for(j=0;j<3;j++){
                    unflip(i,j);
                    icons2d[i][j] = icons[currentIconIndex];
                    currentIconIndex++;
                }
            }
        }
        else{
            for(i=0;i<4;i++){
                for(j=0;j<4;j++){
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
        let totalIntervals = 600;
        let increment = 100 / totalIntervals;


        function setTime() {

            totalSeconds += increment;
            if (totalSeconds >= 100) {
                document.querySelector(".line").style.width = "100%";

                WonorLose();
                
                clearInterval(interval);
                
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
                for(j=0;j<3;j++){
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

        // if(decision){
        //     if(localStorage.getItem('winCount')){
        //         localStorage.setItem('winCount',parseInt(localStorage.getItem('winCount'))+1)
        //     }
        //     else{
        //         localStorage.setItem('winCount',1);
        //     }
        // }

    }

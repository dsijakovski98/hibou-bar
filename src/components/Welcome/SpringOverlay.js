import React from 'react'
import './styles/style.css'
import { Spring } from 'react-spring/renderprops'
import { Link } from 'react-router-dom'

function SpringOverlay() {
    return (
        <div className='welcome-overlay'>
            <Spring
                from={{opacity: 0, x: 6369}}
                to={{opacity: 1, x: 4500}}
                config={{duration: 2000, delay: 1000}}
            >
                {
                    props => (
                        <div className='logo-container' style={props}>
                            <svg className='welcome-logo' width="886" height="333" viewBox="0 0 886 333" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path strokeDashoffset={props.x} fillRule="evenodd" clipRule="evenodd" d="M260.252 1.82465C260.806 2.26753 267.438 6.704 274.991 11.6883L288.726 20.7507L293.347 36.2489C295.886 44.7737 299.326 56.4422 300.986 62.1766C302.646 67.9136 304.674 74.7411 305.496 77.3472C306.317 79.9558 308.537 87.4234 310.425 93.9411C324.248 141.634 329.001 151.249 344.047 161.948C346.74 163.865 349.362 165.741 349.872 166.12C350.38 166.499 346.814 170.375 341.948 174.732C329.323 186.035 323.96 195.427 317.705 217.2C317.18 219.025 314.555 227.985 311.871 237.112C302.618 268.572 301.12 273.674 296.137 290.682C293.387 300.067 290.683 308.861 290.13 310.22C289.493 311.782 283.905 316.144 274.949 322.07C258.113 333.211 257.08 332.572 289.254 330.987C316.016 329.668 314.199 329.988 314.861 326.486C315.132 325.045 318.078 314.48 321.413 303.009C331.388 268.653 339.461 240.591 345.691 218.603C351.92 196.615 366.691 183.057 387.579 180.147C432.789 173.852 462.369 221.508 432.635 252.73C410.191 276.292 366.408 271.7 351.59 244.228C348.634 238.75 348.329 239.067 344.795 251.332C343.217 256.808 340.599 265.768 338.979 271.244C328.051 308.123 325.869 315.573 325.415 317.519L324.904 319.707L341.152 319.05C350.086 318.691 362.626 318.105 369.018 317.752L380.639 317.107L375.357 314.92C372.453 313.717 367.623 311.741 364.628 310.53C357.514 307.655 357.64 308.06 360.615 297.82C363.71 287.157 363.185 287.69 368.73 289.558C448.092 316.3 510.913 221.759 446.954 171.834L440.59 166.868L449.735 158.612C489.374 122.82 474.541 60.8173 422.235 43.6422C405.04 37.9949 384.487 37.8336 369.261 43.2275C362.791 45.5187 362.637 45.3881 359.491 35.0969C356.136 24.1171 355.506 25.1821 368.202 20.3641C380.779 15.5949 380.765 15.5795 362.415 14.873C353.843 14.5427 341.671 14.0153 335.364 13.7005L323.895 13.127L324.622 16.3194C325.021 18.0755 326.028 21.6442 326.861 24.2528C330.264 34.9024 336.671 56.7059 337.307 59.8086C338.131 63.8253 332.349 70.3149 331.106 66.7718C330.769 65.8093 328.305 57.3434 325.632 47.9559C322.962 38.5683 319.008 24.7034 316.849 17.1411L312.924 3.39136L292.902 2.288C268.026 0.915845 258.955 0.785285 260.252 1.82465ZM406.677 66.2829C444.133 75.6064 456.191 116.016 428.804 140.446C402.196 164.177 358.513 154.093 347.345 121.643C336.257 89.4227 370.661 57.3203 406.677 66.2829ZM575.559 79.3389C466.762 96.7929 467.738 240.068 576.752 254.579C658.807 265.502 718.355 192.196 681.444 125.703C668.71 102.765 649.157 88.6573 619.445 80.9747C614.236 79.6282 581.39 78.4019 575.559 79.3389ZM5.28182 84.6969C6.70236 86.3917 11.988 92.7225 17.0284 98.7641L26.1906 109.752V167.213V224.675L14.9404 238.023C8.75616 245.365 3.92688 251.581 4.21213 251.837C4.50023 252.093 23.1356 252.193 45.6304 252.057L86.5267 251.809L75.3592 238.42L64.1916 225.031L64.4712 197.649L64.7507 170.268L96.7101 170.017L128.67 169.766L128.641 197.511L128.615 225.259L117.485 238.532L106.354 251.809L147.256 252.057C169.751 252.193 188.395 252.09 188.686 251.832C188.977 251.571 184.148 245.342 177.958 237.987L166.702 224.619L166.733 167.101L166.762 109.585L178.24 95.8381L189.719 82.0883L148.466 81.84C125.774 81.7043 107.016 81.7683 106.774 81.9834C106.534 82.201 111.369 88.3245 117.519 95.5949L128.701 108.815L128.421 136.222L128.139 163.629H96.4448H64.7507L64.4712 136.291L64.1916 108.953L75.2993 95.7229C81.4093 88.4474 86.4098 82.2957 86.4098 82.055C86.4098 81.8118 67.5747 81.6147 44.5522 81.6147H2.69745L5.28182 84.6969ZM210.89 84.2234C212.031 85.657 217.291 91.9161 222.582 98.1318L232.204 109.434V166.942V224.45L220.968 237.921C214.786 245.329 209.96 251.596 210.24 251.847C210.519 252.098 229.103 252.193 251.541 252.057L292.335 251.809L281.295 238.532L270.256 225.259L270.248 167.029L270.236 108.802L281.067 95.9226C287.023 88.8391 292.052 82.7206 292.246 82.3289C292.44 81.9373 273.748 81.6147 250.708 81.6147H208.816L210.89 84.2234ZM707.37 82.8C707.958 83.4528 713.247 89.7299 719.123 96.752L729.805 109.516V162.211C729.805 205.987 730.073 215.83 731.391 220.364C743.306 261.419 833.072 269.468 854.482 231.4C860.267 221.119 860.809 214.888 860.809 158.919V108.474L871.994 95.28L883.179 82.0883L869.88 81.8246C862.566 81.6787 850.671 81.6787 843.443 81.8246L830.305 82.0883L841.832 95.8381L853.361 109.585L853.381 161.732C853.401 218.951 853.327 219.704 846.729 229.808C831.571 253.022 790.698 256.342 775.391 235.601C768.277 225.965 768.425 227.399 768.086 165.278L767.775 109.089L778.637 96.0634C784.61 88.8979 789.656 82.7181 789.85 82.3264C790.044 81.9347 771.326 81.6147 748.252 81.6147C714.83 81.6147 706.523 81.8554 707.37 82.8ZM392.26 89.6301C391.679 89.8246 389.904 90.2394 388.318 90.5542C377.077 92.7763 370.507 107.535 376.258 117.644C386.082 134.909 415.311 129.561 416.872 110.215C417.83 98.3034 403.123 86 392.26 89.6301ZM598.365 148.589C597.757 150.01 614.778 181.493 616.744 182.581C619.211 183.951 616.264 184.962 609.812 184.962C603.143 184.962 603.003 184.911 603.622 182.694C605.222 176.977 601.751 174.532 592.03 174.532C582.206 174.532 579.256 176.345 579.983 181.941C580.306 184.419 580.146 184.496 574.238 184.772C570.898 184.929 568.166 184.834 568.166 184.563C568.166 184.291 572.242 176.524 577.225 167.3C582.277 157.951 586.065 149.78 585.788 148.83C585.161 146.672 585.845 146.49 593.051 146.892C597.669 147.148 598.824 147.517 598.365 148.589ZM661.225 150.607C666.916 156.328 664.783 164.968 656.961 167.876L653.775 169.062L658.088 174.581C660.461 177.615 663.305 180.833 664.409 181.729C667.712 184.414 666.785 184.962 658.952 184.962C651.986 184.962 651.53 184.836 652.149 183.083C652.619 181.752 651.367 179.381 647.864 174.975L642.915 168.749L638.026 169.034L633.137 169.318L633.177 177.141L633.217 184.962L627.894 184.964H622.574L622.819 165.764C622.954 155.204 623.07 146.562 623.082 146.562C623.09 146.562 630.983 146.777 640.622 147.038L658.145 147.512L661.225 150.607ZM559.066 147.944C564.546 149.816 566.588 157.291 562.797 161.615L560.601 164.124L563.325 167.029C566.497 170.411 566.976 175.771 564.403 179.069C561.026 183.398 557.081 184.304 539.641 184.767L523.264 185.2V166.12V147.038H539.835C548.948 147.038 557.603 147.445 559.066 147.944ZM533.299 156.991V161.259H543.209C553.618 161.259 556.06 160.363 555.301 156.825C554.713 154.088 550.203 152.755 541.489 152.739L533.299 152.726V156.991ZM633.314 153.359C632.926 153.707 632.609 155.839 632.609 158.1V162.209H642.516C653.219 162.209 655.264 161.379 654.613 157.306C654.029 153.645 636.594 150.415 633.314 153.359ZM460.455 159.697C453.475 167.07 453.481 165.703 460.404 173.063C467.438 180.543 466.443 180.497 477.356 173.823C489.014 166.689 489.014 166.428 477.41 159.426C465.844 152.445 467.341 152.422 460.455 159.697ZM588.926 162.636C585.312 169.72 585.241 169.528 591.405 169.333C598.336 169.113 598.399 168.993 594.805 162.618L591.724 157.148L588.926 162.636ZM533.299 172.671V177.443L544.108 177.174L554.913 176.903L555.971 174.197C557.768 169.602 554.174 167.897 542.693 167.897H533.299V172.671ZM385.922 206.451C365.156 216.273 372.464 242.8 395.937 242.8C418.381 242.8 425.31 215.912 405.245 206.678C400.379 204.438 390.421 204.321 385.922 206.451Z" stroke="white" strokeWidth="2"/>
                            </svg>
                        </div>
                    )
                }
            </Spring>
            <Link to='/home'>
                <button>JOIN US</button>
            </Link>
        </div>
    )
}

export default SpringOverlay

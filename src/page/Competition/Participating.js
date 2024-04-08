import React from 'react'
import CLOSE from '../../assets/SVG/close_modal.svg'

const Participating = () => {
    return (
        <div class="modal fade" id="participat" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered participat_MOdal">
                <div class="modal-content">
                    <div class="modal-body participat">
                        <img className='participat_close' src={CLOSE} data-bs-dismiss="modal" aria-label="Close" />
                        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle opacity="0.4" cx="60" cy="60" r="60" fill="#0EAC3A" />
                            <circle cx="60" cy="60" r="50" fill="#0EAC3A" />
                            <path d="M50 60L51.25 61.25M80 50L60 70L58.75 68.75" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M40 60L50 70L70 50" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <h2>Thank you for participating</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Participating

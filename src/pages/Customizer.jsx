import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'
import { AnimatePresence, motion } from 'framer-motion'
import { fadeAnimation, slideAnimation } from '../config/motion'
import { EditorTabs, FilterTabs } from '../config/constants'
import { CustomButton, Tab } from '../components'

const Customizer = () => {

    const snap = useSnapshot(state)
    return (
        <AnimatePresence>
            {
                !snap.intro && (
                    <>
                        {/* barra de opciones de personalizacion  left*/}
                        <motion.div  {...slideAnimation('left')} key='custom' className='absolute top-0 left-0 z-10' >
                            <div className='flex items-center min-h-screen' >
                                <div className='editortabs-container tabs' >
                                    {
                                        EditorTabs.map((tab) => (
                                            <Tab
                                                key={tab.name}
                                                tab={tab}
                                                handleClick={() => { }}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        </motion.div>

                        {/* boton de regreso al intro*/}
                        <motion.div  {...fadeAnimation} className='absolute z-10 top-5 right-5' >
                            <CustomButton
                                type='filled'
                                title='Go Back'
                                handleClick={() => state.intro = true}
                                customStyles='w-fit px-4 py-2.5 font-bold text-sm'
                            />
                        </motion.div>

                        {/* barra de opciones de personalizacion  button*/}
                        <motion.div {...slideAnimation('up')} className='filtertabs-container'>
                            {
                                FilterTabs.map((tab) => (
                                    <Tab
                                        key={tab.name}
                                        tab={tab}
                                        isFilterTab
                                        isActiveTab=''
                                        handleClick={() => { }}
                                    />
                                ))
                            }
                        </motion.div>
                    </>
                )
            }
        </AnimatePresence>
    )
}

export default Customizer
'use client'
import React from 'react';
import { motion } from 'framer-motion';
import ProductPageLayout from '../../layout-components/ProductPageLayout';
import { OutlineTextRed } from '../../layout-components/OutlineTextColors';

const Original = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
     <motion.div
        initial={{ scale: 0.8, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}>
      <OutlineTextRed words={'Original Recipe'} />
      </motion.div>

      <ProductPageLayout
        varietyName={'Original Recipe'}
        imageSrc={'/images/boards/original-recipe-all.png'}
        imageAlt={'Image of Original Recipe product package over board'}
      >
        Our organic tofu is a versatile and delicious plant-based option that can be enjoyed in a
        variety of ways. We use only the highest quality, organic ingredients to marinate and bake
        our tofu to perfection. The result is a tender, chewy bite that is bursting with flavor.
        Each serving is naturally low in fat and cholesterol-free, and is packed with over 30 grams
        of protein, calcium, and iron to give you the fuel you need to live your best life. Whether
        you add it to salads, throw it on top of ramen, combine it with mashed potatoes and gravy,
        or cook your own tofu scramble this weekend, you can guarantee that you&apos;ll make each
        bite disappear fast and enjoy it guilt-free anytime with any dish.
      </ProductPageLayout>
    </div>
  );
};

export default Original;

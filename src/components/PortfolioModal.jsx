import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const PortfolioModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-white rounded-lg p-6 max-w-lg w-full mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <button
            onClick={onClose}
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PortfolioModal;

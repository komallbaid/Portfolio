import { motion } from 'motion/react';
import { Download, FileText } from 'lucide-react';
import { Button } from './ui/button';

export function ResumeSection() {
  const handleDownloadResume = () => {
    // In a real app, this would download the actual resume PDF
    alert('Resume download would start here. Please add your actual resume PDF URL.');
  };

  const handleDownloadCoverLetter = () => {
    // In a real app, this would download the actual cover letter PDF
    alert('Cover Letter download would start here. Please add your actual cover letter PDF URL.');
  };

  return (
    <section id="resume" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
            Resume
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mb-12 shadow-[0_0_10px_rgba(0,212,255,0.8)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Download Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              onClick={handleDownloadResume}
              className="bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all duration-300 text-primary-foreground px-8 py-6"
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </Button>
            <Button
              onClick={handleDownloadCoverLetter}
              className="bg-gradient-to-r from-secondary to-accent hover:shadow-[0_0_30px_rgba(167,139,250,0.5)] transition-all duration-300 text-primary-foreground px-8 py-6"
            >
              <Download size={20} className="mr-2" />
              Download Cover Letter
            </Button>
          </div>

          {/* Document Previews Side by Side */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Resume Preview */}
            <div className="relative group">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              
              <div className="relative p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm">
                <h3 className="text-xl mb-4 text-primary">Resume</h3>
                <div className="aspect-[8.5/11] bg-white rounded-lg shadow-2xl flex items-center justify-center">
                  {/* PDF Viewer Placeholder */}
                  <div className="text-center p-8">
                    <FileText size={48} className="mx-auto mb-3 text-gray-400" />
                    <h4 className="text-lg text-gray-600 mb-2">Resume Preview</h4>
                    <p className="text-xs text-gray-500 mb-3">
                      Embed your resume PDF here
                    </p>
                    <div className="text-xs text-gray-400">
                      <code className="block bg-gray-100 p-2 rounded text-left text-[10px]">
                        {`<iframe src="resume.pdf"\n  className="w-full h-full" />`}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cover Letter Preview */}
            <div className="relative group">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              
              <div className="relative p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm">
                <h3 className="text-xl mb-4 text-secondary">Cover Letter</h3>
                <div className="aspect-[8.5/11] bg-white rounded-lg shadow-2xl flex items-center justify-center">
                  {/* PDF Viewer Placeholder */}
                  <div className="text-center p-8">
                    <FileText size={48} className="mx-auto mb-3 text-gray-400" />
                    <h4 className="text-lg text-gray-600 mb-2">Cover Letter Preview</h4>
                    <p className="text-xs text-gray-500 mb-3">
                      Embed your cover letter PDF here
                    </p>
                    <div className="text-xs text-gray-400">
                      <code className="block bg-gray-100 p-2 rounded text-left text-[10px]">
                        {`<iframe src="cover.pdf"\n  className="w-full h-full" />`}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
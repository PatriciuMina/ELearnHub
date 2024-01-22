class VideoTranscodeJob
  include Sidekiq::Job


  def perform(video_path)
    # Check if video is already encoded in H.264
    codec_name = `ffprobe -v error -select_streams v:0 -show_entries stream=codec_name -of default=noprint_wrappers=1:nokey=1 "#{video_path}"`.strip
    if codec_name == 'h264'
      Rails.logger.info('Video is already encoded in H.264')
      return
    end

    # Set output filename and encoding parameters
    base_name, ext = File.split(video_path)
    out_path = "#{base_name}_h264.mp4"
    encoding_params = ['-c:v', 'libx264', '-preset', 'slow', '-crf', '23', '-c:a', 'copy']

    # Run FFmpeg to transcode the video
    ffmpeg_cmd = ['ffmpeg', '-i', video_path] + encoding_params + [out_path]
    system(*ffmpeg_cmd)
    if $?.success?
      Rails.logger.info("Transcoding to H.264 completed: #{out_path}")
    else
      Rails.logger.error("Transcoding to H.264 failed: #{$?.to_s}")
      raise "Transcoding to H.264 failed"
    end
  end
end
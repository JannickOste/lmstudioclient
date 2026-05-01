
type DownloadModelResult = {
    /** Unique identifier for the download job. Absent when status is already_downloaded. */
    job_id?: string;
    
    /** Current status of the download. */
    status : "downloading" | "paused" | "completed" | "failed" | "already_downloaded"

    /** Download completion time in ISO 8601 format. Present when status is completed. */
    completed_at?: string;

    /** Total size of the download in bytes. Absent when status is already_downloaded. */
    total_size_bytes?: number;

    /** Download start time in ISO 8601 format. Absent when status is already_downloaded. */
    started_at?: string;
}

export default DownloadModelResult;
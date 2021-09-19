import { saveAdditionalCommentInfo, getAdditionalCommentInfo } from '../db/additionalCommentInfo';

export const handle_POST_additionalCommentInfo = (req, res) => {
    saveAdditionalCommentInfo();
}

export const handle_GET_additionalCommentInfo = (req, res) => {
    getAdditionalCommentInfo();
}

export const handle_PUT_additionalCommentInfo = (req, res) => {
    saveAdditionalCommentInfo();
}
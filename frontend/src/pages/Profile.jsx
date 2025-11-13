import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../components/ProductProvider.jsx";
import "../styles/Profile.css";
import { toast } from "react-hot-toast";
import Lottie from "lottie-react";
import Loading from "../animation/loading.json";

function Profile() {
  const { fetchUser, uploadAvatar, updateProfile, updatePassword } =
    useContext(ProductContext);

  const [userData, setUserData] = useState(null);
  const [editableData, setEditableData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔒 Password modal states
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    const loadUser = async () => {
      try {
        const profile = await fetchUser();
        if (profile) {
          setUserData(profile);
          setEditableData({
            username: profile.username || "",
            email: profile.email || "",
            avatar: profile.avatar || "",
          });
        }
      } catch (err) {
        console.error("Error loading user profile:", err);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEdit = () => setEditMode(true);

  const handleCancel = () => {
    setEditableData({
      username: userData.username,
      email: userData.email,
      avatar: userData.avatar,
    });
    setEditMode(false);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!editableData.username || !editableData.email) {
      toast.error("Name and email are required");
      return;
    }

    const success = await updateProfile({
      name: editableData.username,
      email: editableData.email,
    });

    if (success) {
      const updated = await fetchUser();
      setUserData(updated);
      setEditableData({
        username: updated.username,
        email: updated.email,
        avatar: updated.avatar,
      });
      setEditMode(false);
      toast.success("Profile updated successfully!");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleImageUpload = async () => {
    if (!selectedImage) return toast.error("Please select an image first");
    await uploadAvatar(selectedImage);
    const refreshed = await fetchUser();
    setUserData(refreshed);
    setEditableData({ ...editableData, avatar: refreshed.avatar });
    setSelectedImage(null);
    setImagePreview(null);
    toast.success("Profile picture updated!");
  };

  // ✅ Handle password change modal actions
  const openPasswordModal = () => setShowPasswordModal(true);
  const closePasswordModal = () => {
    setShowPasswordModal(false);
    setOldPassword("");
    setNewPassword("");
  };

  const handlePasswordSubmit = async () => {
    if (!oldPassword || !newPassword) {
      toast.error("Please fill in both fields");
      return;
    }
    await updatePassword(oldPassword, newPassword);
    closePasswordModal();
  };

  if (loading)
    return (
      <div className="loading-container">
        <Lottie className="loadingAnimation" animationData={Loading} loop />
        <p className="loading-text">Loading Your Profile...</p>
      </div>
    );

  return (
    <div className="profile-container">
      <h2>My Profile</h2>

      <div className="profile-card">
        {/* 👤 Avatar Section */}
        <div className="avatar-section">
          <img
            src={
              imagePreview ||
              userData?.avatar ||
              "https://cdn-icons-png.flaticon.com/512/847/847969.png"
            }
            alt="Profile Avatar"
            className="profile-avatar"
          />

          <label className="upload-btn">
            📸 Change Picture
            <input type="file" accept="image/*" onChange={handleImageChange} hidden />
          </label>

          {selectedImage && (
            <button id="save_btn" onClick={handleImageUpload}>
              ✅ Upload Image
            </button>
          )}
        </div>

        {/* 🧾 Profile Info */}
        <form className="profile-info" onSubmit={handleSave}>
          <div className="info-field">
            <label>Name:</label>
            <input
              type="text"
              value={editableData?.username || ""}
              disabled={!editMode}
              onChange={(e) =>
                setEditableData({ ...editableData, username: e.target.value })
              }
            />
          </div>

          <div className="info-field">
            <label>Email:</label>
            <input
              type="email"
              value={editableData?.email || ""}
              disabled={!editMode}
              onChange={(e) =>
                setEditableData({ ...editableData, email: e.target.value })
              }
            />
          </div>

          <div className="button-group">
            {editMode ? (
              <>
                <button type="submit" className="save_btn">
                  💾 Save Changes
                </button>
                <button type="button" className="cancel__btn" onClick={handleCancel}>
                  ❌ Cancel
                </button>
              </>
            ) : (
              <button type="button" className="edit-btn" onClick={handleEdit}>
                ✏️ Edit Profile
              </button>
            )}

            <button
              type="button"
              className="password-btn"
              onClick={openPasswordModal}
            >
              🔑 Change Password
            </button>
          </div>
        </form>
      </div>

      {/* 🔐 Password Change Modal */}
      {showPasswordModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Change Password</h3>

            <input
              type="password"
              placeholder="Enter old password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <div className="modal-buttons">
              <button onClick={handlePasswordSubmit} className="ok-btn">
                ✅ OK
              </button>
              <button onClick={closePasswordModal} className="cancel_btn">
                ❌ Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent {
  @Input() imageUrl:any;
  title: string = 'Cat';
  url: string = 'https://example.com'; // Replace with your website URL

  shareOnFacebook() {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.url)}&quote=${encodeURIComponent(this.title)}`;
    window.open(facebookUrl, '_blank');
  }

  shareOnInstagram() {
    const instagramUrl = `https://www.instagram.com/`;
    alert('Instagram sharing via link is not supported; please download the image and upload manually.');
    window.open(instagramUrl, '_blank');
  }

  shareOnWhatsApp() {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(this.title)} ${encodeURIComponent(this.imageUrl)}`;
    window.open(whatsappUrl, '_blank');
  }

  shareOnGmail() {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=&su=${encodeURIComponent(this.title)}&body=${encodeURIComponent(this.imageUrl)}`;
    window.open(gmailUrl, '_blank');
  }

  shareOnLinkedIn() {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(this.url)}`;
    window.open(linkedinUrl, '_blank');
  }

  shareOnX() {
    const xUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(this.url)}&text=${encodeURIComponent(this.title)}&via=yourTwitterHandle`; // Replace 'yourTwitterHandle' with your actual Twitter handle
    window.open(xUrl, '_blank');
  }

}

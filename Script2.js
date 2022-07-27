// JavaScript source code



//�v�f�擾
const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

// �N���b�N���Ԃ̐���
let clickTime = 0;
// �����ː����J�E���g
let timesClicked = 0;


//�N���b�N�C�x���g
loveMe.addEventListener('click', (e) => {

        if (clickTime === 0) {
            clickTime = new Date().getTime();
        } else {
            if ((new Date().getTime() - clickTime) < 800) {
                createHeart(e);
                clickTime = 0; //������

            } else {
                clickTime = new Date().getTime();
            }
        }
});

    // �n�[�g�̍쐬
    const createHeart = (e) => {
        // https://fontawesome.com/�@���

        const heart = document.createElement('i');
        heart.classList.add('fas');
        heart.classList.add('fa-heart');

        const { xInside, yInside } = culcPosition(e);

        // �n�[�g�̈ʒu���w��
        // �X�^�C����.loveMe .fa-heart {}�ɂ�position: absolute;��
        // �w�肵�Ă��邽�߁A�ʒu�𐧌�ł���
        heart.style.top = `${yInside}px`;
        heart.style.left = `${xInside}px`;

        // �q�v�f�Ƃ��Ēǉ�
        loveMe.appendChild(heart);
        // �����ː��𑝉����đ}��
        times.innerHTML = ++timesClicked;

        // �N���b�N����ƃn�[�g�v�f�������ɑ����Ă������߁A5�b��ɍ폜
        setTimeout(() => heart.remove(), 5000);
}

//�v�f���o���ʒu���v�Z
function culcPosition(e) { 
        // �N���b�N�����ʒu���擾
        const x = e.clientX;
        const y = e.clientY;

        // �y�[�W����݂ĉ摜�̈ʒu���擾
        const leftOffset = e.target.offsetLeft;
        const topOffset = e.target.offsetTop;

        // �n�[�g���o���ʒu�𐧌�
        // �摜�̈ʒu�ƃN���b�N�ʒu����v�Z

        const xInside = x - leftOffset;
        const yInside = y - topOffset;

    return { xInside, yInside };
}
   

   

    


       

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts 'Seeding users...'
u1 = User.create(email: "zion@email.com", password: "zionisaman", first_name: "Zion", last_name: "Miller", identify_as: "Man", age: 24, weight: 100, height: "6'0", birth_control_method: "Barrier Method", menstruating: "no")
u2 = User.create(email: "laura@email.com", password: "laura123", first_name: "Laura", last_name: "Gonzalez", identify_as: "Woman", age: 24, weight: 147, height: "5'0", birth_control_method: "Intrauterine Contraception", menstruating: "yes")
puts 'Done seeding users!'

puts 'Seeding educational insight...'
ed1 = EducationalInsight.create(title: "Birth Control Methods", content: "Intrauterine Contraception
Levonorgestrel intrauterine system (LNG IUD)—The LNG IUD is a small T-shaped device like the Copper T IUD. It is placed inside the uterus by a doctor. It releases a small amount of progestin each day to keep you from getting pregnant. The LNG IUD stays in your uterus for up to 3 to 6 years, depending on the device. Typical use failure rate: 0.1-0.4%.

Copper T intrauterine device (IUD)—This IUD is a small device that is shaped in the form of a “T.” Your doctor places it inside the uterus to prevent pregnancy. It can stay in your uterus for up to 10 years. Typical use failure rate: 0.8%.

Hormonal Methods
Implant—The implant is a single, thin rod that is inserted under the skin of a women’s upper arm. The rod contains a progestin that is released into the body over 3 years. Typical use failure rate: 0.1%.

Injection or “shot”—Women get shots of the hormone progestin in the buttocks or arm every three months from their doctor. Typical use failure rate: 4%.
Combined oral contraceptives—Also called “the pill,” combined oral contraceptives contain the hormones estrogen and progestin. It is prescribed by a doctor. A pill is taken at the same time each day. If you are older than 35 years and smoke, have a history of blood clots or breast cancer, your doctor may advise you not to take the pill. Typical use failure rate: 7%.

Progestin only pill—Unlike the combined pill, the progestin-only pill (sometimes called the mini-pill) only has one hormone, progestin, instead of both estrogen and progestin. It is prescribed by a doctor. It is taken at the same time each day. It may be a good option for women who can’t take estrogen. Typical use failure rate: 7%.

Patch—This skin patch is worn on the lower abdomen, buttocks, or upper body (but not on the breasts). This method is prescribed by a doctor. It releases hormones progestin and estrogen into the bloodstream. You put on a new patch once a week for three weeks. During the fourth week, you do not wear a patch, so you can have a menstrual period. Typical use failure rate: 7%.

Hormonal vaginal contraceptive ring—The ring releases the hormones progestin and estrogen. You place the ring inside your vagina. You wear the ring for three weeks, take it out for the week you have your period, and then put in a new ring. Typical use failure rate: 7%.

Barrier Methods
Diaphragm or cervical cap—Each of these barrier methods are placed inside the vagina to cover the cervix to block sperm. The diaphragm is shaped like a shallow cup. The cervical cap is a thimble-shaped cup. Before sexual intercourse, you insert them with spermicide to block or kill sperm. Visit your doctor for a proper fitting because diaphragms and cervical caps come in different sizes. Typical use failure rate for the diaphragm: 17%.

Sponge—The contraceptive sponge contains spermicide and is placed in the vagina where it fits over the cervix. The sponge works for up to 24 hours, and must be left in the vagina for at least 6 hours after the last act of intercourse, at which time it is removed and discarded. Typical use failure rate: 14% for women who have never had a baby and 27% for women who have had a baby.

Male condom—Worn by the man, a male condom keeps sperm from getting into a woman’s body. Latex condoms, the most common type, help prevent pregnancy, and HIV and other STDs, as do the newer synthetic condoms. “Natural” or “lambskin” condoms also help prevent pregnancy, but may not provide protection against STDs, including HIV. Typical use failure rate: 13%.1 Condoms can only be used once. You can buy condoms, KY jelly, or water-based lubricants at a drug store. Do not use oil-based lubricants such as massage oils, baby oil, lotions, or petroleum jelly with latex condoms. They will weaken the condom, causing it to tear or break.

Female condom—Worn by the woman, the female condom helps keeps sperm from getting into her body. It is packaged with a lubricant and is available at drug stores. It can be inserted up to eight hours before sexual intercourse. Typical use failure rate: 21%,1 and also may help prevent STDs.

Spermicides—These products work by killing sperm and come in several forms—foam, gel, cream, film, suppository, or tablet. They are placed in the vagina no more than one hour before intercourse. You leave them in place at least six to eight hours after intercourse. You can use a spermicide in addition to a male condom, diaphragm, or cervical cap. They can be purchased at drug stores. Typical use failure rate: 21%.

Fertility Awareness-Based Methods
Your fertility pattern is the number of days in the month when you are fertile (able to get pregnant), days when you are infertile, and days when fertility is unlikely, but possible. If you have a regular menstrual cycle, you have about nine or more fertile days each month. If you do not want to get pregnant, you do not have sex on the days you are fertile, or you use a barrier method of birth control on those days. Failure rates vary across these methods.1-2 Range of typical use failure rates: 2-23%.

Lactational Amenorrhea Method
For women who have recently had a baby and are breastfeeding, the Lactational Amenorrhea Method (LAM) can be used as birth control when three conditions are met: 1) amenorrhea (not having any menstrual periods after delivering a baby), 2) fully or nearly fully breastfeeding, and 3) less than 6 months after delivering a baby. LAM is a temporary method of birth control, and another birth control method must be used when any of the three conditions are not met.

Emergency Contraception
Emergency contraception is NOT a regular method of birth control. Emergency contraception can be used after no birth control was used during sex, or if the birth control method failed, such as if a condom broke.

Copper IUD—Women can have the copper T IUD inserted within five days of unprotected sex.

Emergency contraceptive pills—Women can take emergency contraceptive pills up to 5 days after unprotected sex, but the sooner the pills are taken, the better they will work. There are three different types of emergency contraceptive pills available in the United States. Some emergency contraceptive pills are available over the counter.

Permanent Methods of Birth Control
Female Sterilization—Tubal ligation or “tying tubes”— A woman can have her fallopian tubes tied (or closed) so that sperm and eggs cannot meet for fertilization. The procedure can be done in a hospital or in an outpatient surgical center. You can go home the same day of the surgery and resume your normal activities within a few days. This method is effective immediately. Typical use failure rate: 0.5%.

Male Sterilization–Vasectomy—This operation is done to keep a man’s sperm from going to his penis, so his ejaculate never has any sperm in it that can fertilize an egg. The procedure is typically done at an outpatient surgical center. The man can go home the same day. Recovery time is less than one week. After the operation, a man visits his doctor for tests to count his sperm and to make sure the sperm count has dropped to zero; this takes about 12 weeks. Another form of birth control should be used until the man’s sperm count has dropped to zero. Typical use failure rate: 0.15%.
", source: "https://www.cdc.gov/reproductivehealth/contraception/index.htm", image: "https://studmed.uio.no/elaring/fag/obstgyn/gyn/images/contraceptives2.jpg")

ed2 = EducationalInsight.create(title: "How to Perform a Self-Breast Exam", content: "Adult women of all ages are encouraged to perform breast self-exams at least once a month.  Johns Hopkins Medical center states,

“Forty percent of diagnosed breast cancers are detected by women who feel a lump, so establishing a regular breast self-exam is very important.”

While mammograms can help you to detect cancer before you can feel a lump, breast self-exams help you to be familiar with how your breasts look and feel so you can alert your healthcare professional if there are any changes.

How Should A Breast Self-Exam Be Performed?

1) In the Shower
With the pads/flats of your 3 middle fingers, check the entire breast and armpit area pressing down with light, medium, and firm pressure. Check both breasts each month feeling for any lump, thickening, hardened knot, or any other breast changes.

2) In Front of a Mirror
Visually inspect your breasts with your arms at your sides. Next, raise your arms high overhead. 
Look for any changes in the contour, any swelling, or dimpling of the skin, or changes in the nipples. Next, rest your palms on your hips and press firmly to flex your chest muscles. Left and right breasts will not exactly match—few women’s breasts do, so look for any dimpling, puckering, or changes, particularly on one side.

3) Lying Down
When lying down, the breast tissue spreads out evenly along the chest wall. Place a pillow under your right shoulder and your right arm behind your head. Using your left hand, move the pads of your fingers around your right breast gently covering the entire breast area and armpit.
Use light, medium, and firm pressure. Squeeze the nipple; check for discharge and lumps. Repeat these steps for your left breast.

Can I Rely On Breast Self-Exams Alone To Be Sure I Am Breast Cancer Free?

Mammography can detect tumors before they can be felt, so screening is key for early detection. But when combined with regular medical care and appropriate guideline-recommended mammography, breast self-exams can help women know what is normal for them so they can report any changes to their healthcare provider.
If you find a lump, schedule an appointment with your doctor, but don’t panic — 8 out of 10 lumps are not cancerous. For additional peace of mind, call your doctor whenever you have concerns.
", source: "https://www.nationalbreastcancer.org/breast-self-exam", image: "https://www.nationalbreastcancer.org/wp-content/uploads/breast-self-exam-once-a-month.jpg")
ed3= EducationalInsight.create(title: "Signs and Symptoms of Bleeding Disorders in Women", content: "Signs and symptoms of a bleeding disorder:
Heavy bleeding during menstruation (period) that can include:
<ul>
<li>Bleeding that lasts longer than 7 days from the time bleeding starts until the time it ends;</li>
<li>Flooding or gushing of blood that limits daily activities, such as work, school, exercise, or social activities;</li>
<li>Passing clots that are bigger than a grape; and</li>
<li>Soaking a tampon or pad every hour or more often on the heaviest day(s).</li>
<li>A diagnosis of “low in iron” or having received treatment for anemia.</li>
</ul>
Symptoms of easy or frequent bleeding that can include
<ul>
<li>Nosebleeds that occur for no apparent reason and last longer than 10 minutes or that need medical attention</li>
<li>Easy bruising that occurs with no physical injury;</li>
<li>Excessive bleeding after a medical procedure or dental extraction; and</li>
<li>A history of muscle or joint bleeding with no physical injury.</li>
<li>Having one or more of the bleeding symptoms above and a family member with a bleeding disorder, such as von Willebrand disease or hemophilia.</li>
</ul>
Bleeding disorders can be treated, but first you need to know if you have one!

If you have one or more of these signs and symptoms, please talk with your doctor or other healthcare professional. You can also visit the Better You Know website to take the bleeding disorder risk assessment to determine if you might be at risk for a bleeding disorder. Bleeding disorders can be dangerous if not treated. Finding out if you are at risk can be the first step to feeling better.

Better You Know Campaign

Better You Know is a campaign to raise awareness of bleeding disorders for those individuals who may experience symptoms but have not yet been diagnosed. To learn more about bleeding disorders that affect women, go to the <a href=`https://www.betteryouknow.org/i-want-to-know-for-women`>Better You Know website,</a> which was developed by the National Hemophilia Foundation and the women’s portion was funded through a cooperative agreement with the Centers for Disease Control and Prevention. The Better You Know website has a bleeding disorder risk assessment, which will help to determine if you might have a bleeding disorder. If you decide to seek care, this website also provides tools, information, and resources that can simplify your next steps.
", source: "https://www.cdc.gov/ncbddd/blooddisorders/women/symptoms.html", image:"https://images.everydayhealth.com/images/cs-is-your-menstrual-flow-too-heavy-1440x810.jpg")
ed4 = EducationalInsight.create(title: "What is a Mammogram?", content: "A mammogram is an X-ray picture of the breast. Doctors use a mammogram to look for early signs of breast cancer. Regular mammograms are the best tests doctors have to find breast cancer early, sometimes up to three years before it can be felt.
How is a mammogram done?
You will stand in front of a special X-ray machine. A technologist will place your breast on a plastic plate. Another plate will firmly press your breast from above. The plates will flatten the breast, holding it still while the X-ray is being taken. You will feel some pressure. The steps are repeated to make a side view of the breast. The other breast will be X-rayed in the same way. You will then wait while the technologist checks the X-rays to make sure the pictures do not need to be redone. Keep in mind that the technologist cannot tell you the results of your mammogram. Each woman’s mammogram may look a little different because all breasts are a little different.

What does having a mammogram feel like?
Having a mammogram is uncomfortable for most women. Some women find it painful. A mammogram takes only a few moments, though, and the discomfort is over soon. What you feel depends on the skill of the technologist, the size of your breasts, and how much they need to be pressed. Your breasts may be more sensitive if you are about to get or have your period. A doctor with special training, called a radiologist, will look at the X-ray for early signs of breast cancer or other problems.

When will I get the results of my mammogram?
You will usually get the results within a few weeks, although it depends on the facility. A radiologist reads your mammogram and then reports the results to you and your doctor. If there is a concern, you will hear from the mammography facility earlier. Contact your health care provider or the mammography facility if you do not receive a report of your results within 30 days.

What happens if my mammogram is normal?
Continue to get mammograms according to recommended time intervals. Mammograms work best when they can be compared with previous ones. This allows the radiologist to compare them to look for changes in your breasts.

What happens if my mammogram is abnormal?
An abnormal mammogram does not always mean that there is cancer. But you will need to have additional mammograms, tests, or exams before the doctor can tell for sure. You may also be referred to a breast specialist or a surgeon. It does not necessarily mean you have cancer or need surgery. These doctors are experts in diagnosing breast problems. Doctors will do follow-up tests to diagnose breast cancer or to find that there is no cancer.

Are you worried about the cost? CDC offers free or low-cost mammograms. <a href=`https://www.cdc.gov/cancer/nbccedp/screenings.htm`>Find out if you qualify.</a>
", source: "https://www.cdc.gov/cancer/breast/basic_info/mammograms.htm", image: "https://thumbs.dreamstime.com/b/breast-cancer-awareness-poster-october-month-campaign-mammogram-information-healthcare-medicine-concept-vector-illustration-101551320.jpg")
puts 'Done seeding educational insight!'
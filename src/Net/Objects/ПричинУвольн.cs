﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Net
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Причин увольн.
    /// </summary>
    // *** Start programmer edit section *** (ПричинУвольн CustomAttributes)

    // *** End programmer edit section *** (ПричинУвольн CustomAttributes)
    [AutoAltered()]
    [Caption("Причины увольнений и рекомендации")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПричинУвольнE", new string[] {
            "ДатаЗаполн as \'Дата заполнения\'",
            "ОценПричУвольн.НеУдовл as \'Причина\'",
            "Специалист as \'ФИО\'"})]
    [AssociatedDetailViewAttribute("ПричинУвольнE", "Рекомендации", "РекомендацE", true, "", "Рекомендации", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("ПричинУвольнE", "Специалист", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [View("ПричинУвольнL", new string[] {
            "ДатаЗаполн as \'Дата заполн\'"})]
    public class ПричинУвольн : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДатаЗаполн = System.DateTime.Now;
        
        private IIS.Net.ОценПричУвольн fОценПричУвольн;
        
        private IIS.Net.Специалист fСпециалист;
        
        private IIS.Net.DetailArrayOfРекомендац fРекомендации;
        
        // *** Start programmer edit section *** (ПричинУвольн CustomMembers)

        // *** End programmer edit section *** (ПричинУвольн CustomMembers)

        
        /// <summary>
        /// ДатаЗаполн.
        /// </summary>
        // *** Start programmer edit section *** (ПричинУвольн.ДатаЗаполн CustomAttributes)

        // *** End programmer edit section *** (ПричинУвольн.ДатаЗаполн CustomAttributes)
        public virtual System.DateTime ДатаЗаполн
        {
            get
            {
                // *** Start programmer edit section *** (ПричинУвольн.ДатаЗаполн Get start)

                // *** End programmer edit section *** (ПричинУвольн.ДатаЗаполн Get start)
                System.DateTime result = this.fДатаЗаполн;
                // *** Start programmer edit section *** (ПричинУвольн.ДатаЗаполн Get end)

                // *** End programmer edit section *** (ПричинУвольн.ДатаЗаполн Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПричинУвольн.ДатаЗаполн Set start)

                // *** End programmer edit section *** (ПричинУвольн.ДатаЗаполн Set start)
                this.fДатаЗаполн = value;
                // *** Start programmer edit section *** (ПричинУвольн.ДатаЗаполн Set end)

                // *** End programmer edit section *** (ПричинУвольн.ДатаЗаполн Set end)
            }
        }
        
        /// <summary>
        /// Причин увольн.
        /// </summary>
        // *** Start programmer edit section *** (ПричинУвольн.ОценПричУвольн CustomAttributes)

        // *** End programmer edit section *** (ПричинУвольн.ОценПричУвольн CustomAttributes)
        [PropertyStorage(new string[] {
                "ОценПричУвольн"})]
        public virtual IIS.Net.ОценПричУвольн ОценПричУвольн
        {
            get
            {
                // *** Start programmer edit section *** (ПричинУвольн.ОценПричУвольн Get start)

                // *** End programmer edit section *** (ПричинУвольн.ОценПричУвольн Get start)
                IIS.Net.ОценПричУвольн result = this.fОценПричУвольн;
                // *** Start programmer edit section *** (ПричинУвольн.ОценПричУвольн Get end)

                // *** End programmer edit section *** (ПричинУвольн.ОценПричУвольн Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПричинУвольн.ОценПричУвольн Set start)

                // *** End programmer edit section *** (ПричинУвольн.ОценПричУвольн Set start)
                this.fОценПричУвольн = value;
                // *** Start programmer edit section *** (ПричинУвольн.ОценПричУвольн Set end)

                // *** End programmer edit section *** (ПричинУвольн.ОценПричУвольн Set end)
            }
        }
        
        /// <summary>
        /// Причин увольн.
        /// </summary>
        // *** Start programmer edit section *** (ПричинУвольн.Специалист CustomAttributes)

        // *** End programmer edit section *** (ПричинУвольн.Специалист CustomAttributes)
        [PropertyStorage(new string[] {
                "Специалист"})]
        public virtual IIS.Net.Специалист Специалист
        {
            get
            {
                // *** Start programmer edit section *** (ПричинУвольн.Специалист Get start)

                // *** End programmer edit section *** (ПричинУвольн.Специалист Get start)
                IIS.Net.Специалист result = this.fСпециалист;
                // *** Start programmer edit section *** (ПричинУвольн.Специалист Get end)

                // *** End programmer edit section *** (ПричинУвольн.Специалист Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПричинУвольн.Специалист Set start)

                // *** End programmer edit section *** (ПричинУвольн.Специалист Set start)
                this.fСпециалист = value;
                // *** Start programmer edit section *** (ПричинУвольн.Специалист Set end)

                // *** End programmer edit section *** (ПричинУвольн.Специалист Set end)
            }
        }
        
        /// <summary>
        /// Причин увольн.
        /// </summary>
        // *** Start programmer edit section *** (ПричинУвольн.Рекомендации CustomAttributes)

        // *** End programmer edit section *** (ПричинУвольн.Рекомендации CustomAttributes)
        public virtual IIS.Net.DetailArrayOfРекомендац Рекомендации
        {
            get
            {
                // *** Start programmer edit section *** (ПричинУвольн.Рекомендации Get start)

                // *** End programmer edit section *** (ПричинУвольн.Рекомендации Get start)
                if ((this.fРекомендации == null))
                {
                    this.fРекомендации = new IIS.Net.DetailArrayOfРекомендац(this);
                }
                IIS.Net.DetailArrayOfРекомендац result = this.fРекомендации;
                // *** Start programmer edit section *** (ПричинУвольн.Рекомендации Get end)

                // *** End programmer edit section *** (ПричинУвольн.Рекомендации Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПричинУвольн.Рекомендации Set start)

                // *** End programmer edit section *** (ПричинУвольн.Рекомендации Set start)
                this.fРекомендации = value;
                // *** Start programmer edit section *** (ПричинУвольн.Рекомендации Set end)

                // *** End programmer edit section *** (ПричинУвольн.Рекомендации Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПричинУвольнE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПричинУвольнE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПричинУвольнE", typeof(IIS.Net.ПричинУвольн));
                }
            }
            
            /// <summary>
            /// "ПричинУвольнL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПричинУвольнL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПричинУвольнL", typeof(IIS.Net.ПричинУвольн));
                }
            }
        }
    }
}

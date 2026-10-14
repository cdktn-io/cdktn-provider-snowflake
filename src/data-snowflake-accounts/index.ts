/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// generated from terraform resource schema

import { DataSnowflakeAccountsAccountsList} from './index-structs/index';
export * from './index-structs/index';
import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface DataSnowflakeAccountsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/data-sources/accounts#id DataSnowflakeAccounts#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/data-sources/accounts#like DataSnowflakeAccounts#like}
  */
  readonly like?: string;
  /**
  * Includes dropped accounts that have not yet been deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/data-sources/accounts#with_history DataSnowflakeAccounts#with_history}
  */
  readonly withHistory?: boolean | cdktn.IResolvable;
  /**
  * (Default: `true`) Runs SHOW PARAMETERS IN ACCOUNT once, for the connected account, and saves the output on that account's row only. Other listed accounts stay empty because Snowflake cannot show parameters for another organization account; the call is not repeated or skipped per row. By default this value is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/data-sources/accounts#with_parameters DataSnowflakeAccounts#with_parameters}
  */
  readonly withParameters?: boolean | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/data-sources/accounts snowflake_accounts}
*/
export class DataSnowflakeAccounts extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_accounts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataSnowflakeAccounts resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSnowflakeAccounts to import
  * @param importFromId The id of the existing DataSnowflakeAccounts that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/data-sources/accounts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSnowflakeAccounts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_accounts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.0/docs/data-sources/accounts snowflake_accounts} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSnowflakeAccountsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSnowflakeAccountsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'snowflake_accounts',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.22.0',
        providerVersionConstraint: ' ~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._like = config.like;
    this._withHistory = config.withHistory;
    this._withParameters = config.withParameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accounts - computed: true, optional: false, required: false
  private _accounts = new DataSnowflakeAccountsAccountsList(this, "accounts", false);
  public get accounts() {
    return this._accounts;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // like - computed: false, optional: true, required: false
  private _like?: string; 
  public get like() {
    return this.getStringAttribute('like');
  }
  public set like(value: string) {
    this._like = value;
  }
  public resetLike() {
    this._like = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get likeInput() {
    return this._like;
  }

  // with_history - computed: false, optional: true, required: false
  private _withHistory?: boolean | cdktn.IResolvable; 
  public get withHistory() {
    return this.getBooleanAttribute('with_history');
  }
  public set withHistory(value: boolean | cdktn.IResolvable) {
    this._withHistory = value;
  }
  public resetWithHistory() {
    this._withHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withHistoryInput() {
    return this._withHistory;
  }

  // with_parameters - computed: false, optional: true, required: false
  private _withParameters?: boolean | cdktn.IResolvable; 
  public get withParameters() {
    return this.getBooleanAttribute('with_parameters');
  }
  public set withParameters(value: boolean | cdktn.IResolvable) {
    this._withParameters = value;
  }
  public resetWithParameters() {
    this._withParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withParametersInput() {
    return this._withParameters;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      like: cdktn.stringToTerraform(this._like),
      with_history: cdktn.booleanToTerraform(this._withHistory),
      with_parameters: cdktn.booleanToTerraform(this._withParameters),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      like: {
        value: cdktn.stringToHclTerraform(this._like),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      with_history: {
        value: cdktn.booleanToHclTerraform(this._withHistory),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      with_parameters: {
        value: cdktn.booleanToHclTerraform(this._withParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
